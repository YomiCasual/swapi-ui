import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters, fetchPlanets, fetchStarships } from "../Sagas";
import { StarshipsData } from "./types";

type StateProps = {
  data: StarshipsData[] | any[];
  loading: boolean;
  fetched: boolean;
  error: string;
};

type initialStateProps = {
  starships: StateProps;
  planets: StateProps;
  characters: StateProps;
};

const initialState: initialStateProps = {
  starships: {
    data: [],
    loading: false,
    fetched: false,
    error: "",
  },
  planets: {
    data: [],
    loading: false,
    fetched: false,
    error: "",
  },
  characters: {
    data: [],
    loading: false,
    fetched: false,
    error: "",
  },
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
    [fetchStarships.fulfilled.type]: (state, action) => {
      state.starships.data = action.payload.results;

      state.starships.fetched = true;
    },
    [fetchPlanets.fulfilled.type]: (state, action) => {
      state.planets.data = action.payload.results;
      state.planets.fetched = true;
    },
    [fetchCharacters.fulfilled.type]: (state, action) => {
      state.characters.data = action.payload.results;
      state.characters.fetched = true;
    },
  },
});

export const { getStarships } = GlobalReducer.actions;
export default GlobalReducer.reducer;
