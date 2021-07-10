import { createSlice } from "@reduxjs/toolkit";
import { fetchAllData } from "../Sagas";
import { StarshipsData } from "./types";

// type StateProps = {
//   data: []
// };

type initialStateProps = {
  starships: StarshipsData[];
  planets: any;
  characters: any;
  fetched: boolean;
};

const initialState: initialStateProps = {
  starships: [],
  characters: [],
  planets: [],
  fetched: false,
};

export const GlobalReducer = createSlice({
  name: "GlobalReducer",
  initialState,
  reducers: {
    getStarships: (state, data: any) => {
      //   state.starships = data;
    },
  },
  extraReducers: {
    [fetchAllData.fulfilled.type]: (state, action) => {
      state.starships = action.payload[0].data.results;
      state.planets = action.payload[1].data.results;
      state.characters = action.payload[2].data.results;
      state.fetched = true;
    },
    // [fetchStarships.fulfilled.type]: (state, action) => {
    //   state.starships.data = action.payload.results;

    //   state.starships.fetched = true;
    // },
    // [fetchPlanets.fulfilled.type]: (state, action) => {
    //   state.planets.data = action.payload.results;
    //   state.planets.fetched = true;
    // },
    // [fetchCharacters.fulfilled.type]: (state, action) => {
    //   state.characters.data = action.payload.results;
    //   state.characters.fetched = true;
    // },
  },
});

export const { getStarships } = GlobalReducer.actions;
export default GlobalReducer.reducer;
