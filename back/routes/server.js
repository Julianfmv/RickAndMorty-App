// const http = require("http");
// const getCharById = require("./controllers/getCharById");
// const getCharDetail = require("./controllers/getCharDetail");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     let id = req.url.split("/").at(-1);
//     if (req.url.includes("onsearch")) {
//       getCharById(res, id);
//     }
//     if (req.url.includes("detail")) {
//       getCharDetail(res, id);
//     }
//   })
//   .listen(3001, "localhost");

const express = require("express");
const server = express();
const axios = require("axios");
const cors = require("cors");

server.use(express.json());
server.use(cors());

server.get("/rickandmorty/character/:id", async (req, res) => {
  try {
    const { id } = req.params;
    parseInt(id);
    console.log(id)
    const response = await axios(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    const data = response.data;

    const infoCharacter = {
      id: data.id,
      name: data.name,
      species: data.species,
      gender: data.gender,
      image: data.image,
    };

    res.json(infoCharacter);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

server.get("/rickandmorty/detail/:detailId", async (req, res) => {
  try {
    const { detailId } = req.params;
    parseInt(detailId);
    const { data } = await axios(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );

    const infoCharacterDetail = {
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin?.name,
      image: data.image,
    };
    res.json(infoCharacterDetail);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

let fav = [];

server.get("/rickandmorty/fav", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(fav);
});

server.post("/rickandmorty/fav", (req, res) => {
  fav.push(req.body);

  res.send("Se guardaron correctamente los datos");
});

server.delete("/rickandmorty/fav/:id", (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "*");
  const { id } = req.params;

  const favFiltered = fav.filter((char) => char.id !== parseInt(id));

  let fav = favFiltered;

  res.json("El fav se elimino con exito!");
});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});

module.exports = {
  server,
};
