import { sessionAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//GET ALL SESSIONS
export const getSessionsAction = createAsyncThunk(
  "player/getPlayers",
  async (payload: string | "", { rejectWithValue }) => {
    let req = [];
    try {
      req = await sessionAPI.getSessions(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// GET SINGLE SESSION
export const getSessionAction = createAsyncThunk(
  "player/getPlayers",
  async (payload: number, { rejectWithValue }) => {
    let req = [];
    try {
      req = await sessionAPI.getSessionById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// ADD SESSION SINGLE
export const addSessionAction = createAsyncThunk(
  "player/addPlayer",
  async (payload: {}, { rejectWithValue }) => {
    let req = [];
    try {
      req = await sessionAPI.createSessions(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// UPDATE SINGLE SESSION
export const updateSessionAction = createAsyncThunk(
  "player/updatePlayer",
  async (payload: {id:number}, { rejectWithValue }) => {
    let req:any = [];
    try {
      req = await sessionAPI.updateSessions(payload.id, payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);

// DELETE SESSION SINGLE
export const deleteSessionAction = createAsyncThunk(
  "player/deletePlayer",
  async (payload: {id:number}, { rejectWithValue }) => {
    let req:any = [];
    try {
      req = await sessionAPI.deleteSessionById(payload.id);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);
