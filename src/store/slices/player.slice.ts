import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addPlayerAction,
  deletePlayerAction,
  getPlayersAction,
  updatePlayerAction,
} from "store/actions/player.actions";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    players: [],
    status: "idle",
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
    deletePlayer: (state, action: PayloadAction<number>) => {
      // DELTE SINGLE PLAYER
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlayersAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getPlayersAction.fulfilled, (state, action) => {
        state.players = action.payload;
        state.status = "idle";
      })
      .addCase(getPlayersAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(addPlayerAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addPlayerAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addPlayerAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(updatePlayerAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePlayerAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updatePlayerAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deletePlayerAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePlayerAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deletePlayerAction.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const { getPlayers, getPlayer, addPlayer, updatePlayer, deletePlayer } =
  playerSlice.actions;

export default playerSlice.reducer;
