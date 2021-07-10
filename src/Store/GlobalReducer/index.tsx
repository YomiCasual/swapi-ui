import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../Sagas";
import { CharacterData, PlanetData, StarshipsData } from "./types";

type initialStateProps = {
  starships: StarshipsData[];
  planets: PlanetData[];
  characters: CharacterData[];
  status: null | string;
};

const initialState: initialStateProps = {
  starships: [],
  characters: [],
  planets: [],
  status: null,
};

export const GlobalReducer = createSlice({
  name: "GlobalReducer",
  initialState,
  reducers: {
    getStarships: (state, data: any) => {},
  },
  extraReducers: {
    [fetchAllData.fulfilled.type]: (state, action) => {
      state.starships = action.payload[0].data.results;
      state.planets = action.payload[1].data.results;
      state.characters = action.payload[2].data.results;
      state.status = "success";
    },
    [fetchAllData.pending.type]: (state) => {
      state.status = "loading";
    },
    [fetchAllData.rejected.type]: (state) => {
      state.status = "failed";
    },
  },
});

export const { getStarships } = GlobalReducer.actions;
export default GlobalReducer.reducer;
