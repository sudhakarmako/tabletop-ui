import { sessionAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

//GET ALL SESSIONS
export const getSessionsAction = createAsyncThunk(
  "player/getSessions",
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
  "player/getSessionById",
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
  "player/createSessions",
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
  "player/updateSessions",
  async (payload: any, { rejectWithValue }) => {
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
  "player/deleteSessionById",
  async (payload: number, { rejectWithValue }) => {
    let req:any = [];
    try {
      req = await sessionAPI.deleteSessionById(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);
