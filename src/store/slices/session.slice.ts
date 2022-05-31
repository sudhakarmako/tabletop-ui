import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { 
  addSessionAction, 
  deleteSessionAction,
  getSessionAction, 
  getSessionsAction, 
  updateSessionAction 
  } from "store/actions/session.actions";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {
    sessions: [],
    status :"idle"
  },
  reducers: {
    getSessions: (state, action: PayloadAction<string>) => {
      // GET ALL SESSIONS
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
  extraReducers: builder => {
    builder.addCase(getSessionsAction.pending,(state,action) => {
      state.status = 'loading'
    }).addCase(getSessionsAction.fulfilled, (state, action) => {
      state.sessions = action.payload;
      state.status = 'idle'
    }).addCase(getSessionsAction.rejected, (state, action )=>{
      state.status = 'rejected'
    })

  },
});

export const {getSessions, getSession, addSession, updateSession, deleteSession} = sessionSlice.actions;

export default sessionSlice.reducer;