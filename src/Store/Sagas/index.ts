import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://swapi.dev/api/";


export const fetchStarships = createAsyncThunk(
  "swapi/allstarships",
  async () => {
    const response = await axios.get(`${BASE_URL}/starships`);
    return response.data;
  }
);
export const fetchPlanets = createAsyncThunk("swapi/allPlanets", async () => {
  const response = await axios.get(`${BASE_URL}/planets`);
  return response.data;
});
export const fetchCharacters = createAsyncThunk(
  "swapi/allCharacters",
  async () => {
    const response = await axios.get(`${BASE_URL}/people`);
    return response.data;
  }
);
