import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFavorite = (character) => {
  return async (dispatch) => {
    const response = await axios.post("http://localhost:3001/rickandmorty/fav");
    // const data = response.data;

    return dispatch({
      type: ADD_FAVORITE,
      payload: character, //NO DATAA
    });
  };
};

export const deleteFavorite = (id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `http://localohst:3001/rickandmorty/fav/${id}`
    );
    const data = response.data;

    return dispatch({
      type: DELETE_FAVORITE,
      payload: data,
    });
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
