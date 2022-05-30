import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addPlayerAction, deletePlayerAction, getPlayerAction, getPlayersAction, updatePlayerAction } from "store/actions/player.actions";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
  },
  reducers: {
    getPlayers: (state, action: PayloadAction<string>) => {
      // GET ALL PLAYERS
      return getPlayersAction()
    },
    getPlayer: (state, action: PayloadAction<number>) => {
      // GET SINGLE PLAYER
      return getPlayerAction();
    },
    addPlayer: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE PLAYER
      return addPlayerAction()
    },
    updatePlayer: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE PLAYER
      return updatePlayerAction();
    },
    deletePlayer: (state, action:PayloadAction<number>) => {
      // DELTE SINGLE PLAYER
      return deletePlayerAction();
    },
  },
});

export const {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer} = playerSlice.actions;

export default playerSlice.reducer;