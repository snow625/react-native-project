import { configureStore, combineReducers } from "@reduxjs/toolkit";

import authSlice from "./auth/authReducer";

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
//   auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
