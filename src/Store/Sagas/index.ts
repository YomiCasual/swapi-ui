import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const BASE_URL = "https://swapi.dev/api/";

const urls = [
  BASE_URL + "/starships",
  BASE_URL + "/planets",
  BASE_URL + "/people",
];

export const fetchAllData = createAsyncThunk("swapi/fetchAll", async () => {
  const requests = await urls.map((url) => axios.get(url));
  let responses = await Promise.all(requests);

  return responses;
});
