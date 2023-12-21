import { createReducer } from "@reduxjs/toolkit";

export const authReducer = createReducer(
  {},
  {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loadUserFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },

    logoutRequest: (state) => {
      state.loading = true;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = action.payload;
      state.user = null; // if log out so no user 
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    },

      //add it otherwise stay err don`t remove err from next state
    clearError: (state) => {
      state.error = null;
    },
       //add it otherwise stay err don`t remove err massage  from next state
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
