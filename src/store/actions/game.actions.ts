import { gameAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGamesAction = createAsyncThunk(
  "game/getGames",
  async (payload: string | "", { rejectWithValue }) => {
    let req: [];
    try {
      req = await gameAPI.getGames(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

export const getGameAction = createAsyncThunk(
  "game/getGameById",
  async (payload: number, { rejectWithValue }) => {
    let req: [];
    try {
      req = await gameAPI.getGameById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

export const addGameAction = createAsyncThunk(
  "game/createGames",
  async (payload: {}, { rejectWithValue }) => {
    let req: [];
    try {
      req = await gameAPI.createGames(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

export const updateGameAction = createAsyncThunk(
  "game/updateGames",
  async (payload: {id:number}, { rejectWithValue }) => {
    let req: [];
    try {
      req = await gameAPI.updateGames(payload.id, payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

export const deleteGameAction = createAsyncThunk(
  "game/deleteGameById",
  async (payload: number, { rejectWithValue }) => {
    let req: [];
    try {
      req = await gameAPI.deleteGameById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);