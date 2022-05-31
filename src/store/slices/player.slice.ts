import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  addPlayerAction,
   deletePlayerAction, 
   getPlayerAction, 
   getPlayersAction, 
   updatePlayerAction } from "store/actions/player.actions";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    player: [],
    status:'idle'
  },
  reducers: {
    getPlayers: (state, action: PayloadAction<string>) => {
      // GET ALL PLAYERS
      // return getPlayersAction()
    },
    getPlayer: (state, action: PayloadAction<number>) => {
      // GET SINGLE PLAYER
      return getPlayerAction();
    },
    addPlayer: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE PLAYER
      return addPlayerAction();
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
  extraReducers: builder => {
    builder.addCase(getPlayersAction.pending,(state,action) => {
      state.status = 'loading'
    }).addCase(getPlayersAction.fulfilled, (state, action) => {
      state.player = action.payload;
      state.status = 'idle'
    }).addCase(getPlayersAction.rejected, (state, action )=>{
      state.status = 'rejected'
    })

  },
});

export const {getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer} = playerSlice.actions;

export default playerSlice.reducer;