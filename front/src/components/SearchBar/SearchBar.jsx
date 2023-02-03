import style from "./SearchBar.module.css";
import { useState } from "react";
// import axios from "axios";

function SearchBar({ onSearch, random}) {
   const [character, setCharacter] = useState('')


   const handleChange = (event) => {
      setCharacter(event.target.value);
   }

   return (
      <div className={style.container}>
         <input className={style.search} type='search' value={character} onChange={handleChange} />
         <button onClick={() => onSearch(character)}>Agregar</button>
          
         <button onClick={() => random(Math.floor(Math.random() * 800) + 26)}
         >Random!
         </button>
      </div>
   );
}

export default SearchBar;
