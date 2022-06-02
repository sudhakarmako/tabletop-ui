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
    status: "idle",
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
    },
    updateGame: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE GAME
    },
    deleteGame: (state, action: PayloadAction<number>) => {
      // DELTE SINGLE GAME
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGamesAction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getGamesAction.fulfilled, (state, action) => {
        state.games = action.payload;
        state.status = "idle";
      })
      .addCase(getGamesAction.rejected, (state, action) => {
        state.status = "rejected";
      });
    builder
      .addCase(getGameAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGameAction.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getGameAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(addGameAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addGameAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addGameAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(updateGameAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateGameAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updateGameAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteGameAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteGameAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deleteGameAction.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { getGames, getGame, addGame, updateGame, deleteGame } =
  gameSlice.actions;

export default gameSlice.reducer;
