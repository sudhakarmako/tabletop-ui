import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addGameAction,
  deleteGameAction,
  getGamesAction,
  getGameAction,
  updateGameAction,
} from "store/actions/game.actions";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    games: [],
    status:'idle'
  },
  reducers: {
    getGames: (state, action: PayloadAction<string>) => {
      // GET ALL GAME
    },
    getGame: (state, action: PayloadAction<number>) => {
      // GET SINGLE GAME
      console.log(state, action);
    },
    addGame: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE GAME
      return addGameAction();
    },
    updateGame: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE GAME
      return updateGameAction();
    },
    deleteGame: (state, action: PayloadAction<number>) => {
      // DELTE SINGLE GAME
      return deleteGameAction();
    },
  },
  extraReducers: builder => {
    builder.addCase(getGamesAction.pending,(state,action) => {
      state.status = 'loading'
    }).addCase(getGamesAction.fulfilled, (state, action) => {
      state.games = action.payload;
      state.status = 'idle'
    }).addCase(getGamesAction.rejected, (state, action )=>{
      state.status = 'rejected'
    })

  },
});

export const { getGames, getGame, addGame, updateGame, deleteGame } =
  gameSlice.actions;

export default gameSlice.reducer;
