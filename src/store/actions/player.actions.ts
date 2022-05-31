import { playerAPI } from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPlayersAction = createAsyncThunk(
  "player/getPlayers",
  async (payload: string | "", { rejectWithValue, getState, dispatch }) => {
    let req: [];
    try {
      req = await playerAPI.getPlayers(payload);
    } catch (error) {
      req = [];
      rejectWithValue(error);
    }
    return req;
  }
);










export const getPlayerAction = () => console.log('getPlayerActions')
export const addPlayerAction = () => console.log('addPlayerActions')
export const updatePlayerAction = () => console.log('updatePlayerActions')
export const deletePlayerAction = () => console.log('deletePlayerActions')