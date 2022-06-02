import { playerAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//GET ALL PLAYERS
export const getPlayersAction = createAsyncThunk(
  "player/getPlayers",
  async (payload: string | "", { rejectWithValue }) => {
    let req = [];
    try {
      req = await playerAPI.getPlayers(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// GET SINGLE PLAYER
export const getPlayerAction = createAsyncThunk(
  "player/getPlayers",
  async (payload: number, { rejectWithValue }) => {
    let req = [];
    try {
      req = await playerAPI.getPlayerById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// ADD PLAYER SINGLE
export const addPlayerAction = createAsyncThunk(
  "player/addPlayer",
  async (payload: {}, { rejectWithValue }) => {
    let req = [];
    try {
      req = await playerAPI.createPlayers(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// UPDATE SINGLE PLAYER
export const updatePlayerAction = createAsyncThunk(
  "player/updatePlayer",
  async (payload: {id:number}, { rejectWithValue }) => {
    let req:any = [];
    try {
      req = await playerAPI.updatePlayers(payload.id, payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// DELTE PLAYER SINGEL
export const deletePlayerAction = createAsyncThunk(
  "player/deletePlayer",
  async (payload: number, { rejectWithValue }) => {
    let req:any = [];
    try {
      req = await playerAPI.deletePlayerById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);
