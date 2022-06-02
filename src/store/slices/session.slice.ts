import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addSessionAction,
  deleteSessionAction,
  getSessionAction,
  getSessionsAction,
  updateSessionAction,
} from "store/actions/session.actions";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    sessions: [],
    status:"idle"
  },
  reducers: {
    getSessions: (state, action: PayloadAction<string>) => {
      // GET ALL SESSIONS
    },
    getSession: (state, action: PayloadAction<number>) => {
      // GET SINGLE SESSIONS
    },
    addSession: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE SESSIONS
    },
    updateSession: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE SESSIONS
    },
    deleteSession: (state, action: PayloadAction<number>) => {
      // DELTE SINGLE SESSIONS
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSessionsAction.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getSessionsAction.fulfilled, (state, action) => {
        state.sessions = action.payload;
        state.status = "idle";
      })
      .addCase(getSessionsAction.rejected, (state, action) => {
        state.status = "rejected";
      });
    builder
      .addCase(getSessionAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSessionAction.fulfilled, (state, action) => {
        state.status = "idle";
      })
      .addCase(getSessionAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(addSessionAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSessionAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(addSessionAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(updateSessionAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSessionAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(updateSessionAction.rejected, (state) => {
        state.status = "rejected";
      });
    builder
      .addCase(deleteSessionAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSessionAction.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(deleteSessionAction.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  getSessions,
  getSession,
  addSession,
  updateSession,
  deleteSession,
} = sessionSlice.actions;

export default sessionSlice.reducer;
