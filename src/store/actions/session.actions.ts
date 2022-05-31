import { sessionAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSessionsAction = createAsyncThunk(
  "session/getSessions",
  async (payload: string | "", { rejectWithValue, getState, dispatch }) => {
    let req: [];
    try {
      req = await sessionAPI.getSessions(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);








export const getSessionAction = () => console.log('getSessionActions')
export const addSessionAction = () => console.log('addSessionActions')
export const updateSessionAction = () => console.log('updateSessionActions')
export const deleteSessionAction = () => console.log('deleteSessionActions')