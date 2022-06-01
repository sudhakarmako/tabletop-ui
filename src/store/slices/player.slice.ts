import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addPlayerAction, deletePlayerAction, getPlayerAction, getPlayersAction, updatePlayerAction } from "store/actions/player.actions";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
    status:'idle'
  },
  reducers: {
    getPlayers: (state, action: PayloadAction<string>) => {
      // GET ALL PLAYERS
    },
    getPlayer: (state, action: PayloadAction<number>) => {
      // GET SINGLE PLAYER
    },
    addPlayer: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE PLAYER
    },
    updatePlayer: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE PLAYER
    },
    deletePlayer: (state, action:PayloadAction<number>) => {
      // DELTE SINGLE PLAYER
    },
  },
  extraReducers: builder => {
    builder.addCase(getPlayersAction.pending,(state,action) => {
      state.status = 'loading'
    }).addCase(getPlayersAction.fulfilled, (state, action) => {
      state.players = action.payload;
      state.status = 'idle'
    }).addCase(getPlayersAction.rejected, (state, action )=>{
      state.status = 'rejected'
    })
  }
});

export const {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer} = playerSlice.actions;

export default playerSlice.reducer;