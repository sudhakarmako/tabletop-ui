import { gameAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGamesAction = createAsyncThunk(
  "game/getGames",
  async (payload: string | "", { rejectWithValue, getState, dispatch }) => {
    let req: [];
    try {
      req = await gameAPI.getGames(payload);
    } catch (error) {
      req = [];
      console.log(error);
    }
    return req;
  }
);
export const getGameAction = () => console.log("getGameActions");
export const addGameAction = () => console.log("addGameActions");
export const updateGameAction = () => console.log("updateGameActions");
export const deleteGameAction = () => console.log("deleteGameActions");
