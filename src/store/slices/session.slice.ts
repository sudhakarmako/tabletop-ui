import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addSessionAction, deleteSessionAction, getSessionAction, getSessionsAction, updateSessionAction } from "store/actions/session.actions";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    sessions: [],
  },
  reducers: {
    getSessions: (state, action: PayloadAction<string>) => {
      // GET ALL SESSIONS
      return getSessionsAction()
    },
    getSession: (state, action: PayloadAction<number>) => {
      // GET SINGLE SESSIONS
      return getSessionAction();
    },
    addSession: (state, action: PayloadAction<object>) => {
      // ADDING A SINGLE SESSIONS
      return addSessionAction()
    },
    updateSession: (state, action: PayloadAction<object>) => {
      // UPDATE SINGLE SESSIONS
      return updateSessionAction();
    },
    deleteSession: (state, action:PayloadAction<number>) => {
      // DELTE SINGLE SESSIONS
      return deleteSessionAction();
    },
  },
});

export const {getSessions, getSession, addSession, updateSession, deleteSession} = sessionSlice.actions;

export default sessionSlice.reducer;