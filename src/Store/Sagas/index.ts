import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://swapi.dev/api/";

const urls = [
  BASE_URL + "/starships",
  BASE_URL + "/planets",
  BASE_URL + "/people",
];

export const fetchAllData = createAsyncThunk("swapi/fetchAll", async () => {
  try {
    const requests = await urls.map((url) => axios.get(url));
    let responses= await Promise.all(requests)

    return responses
  } catch (err2) {
    console.log({ err2 });
  }
});

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
