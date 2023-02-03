// import "./styles/App/app.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/Nav/Nav";
import About from "./components/About/About";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import axios from "axios";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "julianmv@gmail.com";
  const password = "asd123";

  // const random = (number) => {
  //   fetch((https://rickandmortyapi.com/api/character/$%7Bnumber%7D%60))
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       }
  //     })
  // }`

  const random = async (number) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${number}`
      );
      const data = response.data;
      if (data.name) setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (character) => {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${character}`
      );
      const data = response.data;
      if (data.id) setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      alert(`No hay personajes con ese id!: error: ${error}`);
    }

    // fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.id) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       alert("No hay personajes con ese ID");
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <NavBar onSearch={onSearch} random={random} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<CharacterDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
