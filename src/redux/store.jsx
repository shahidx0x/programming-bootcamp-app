import { configureStore } from "@reduxjs/toolkit";
import { appServicesApi } from "./services/AppServices";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [appServicesApi.reducerPath]: appServicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appServicesApi.middleware),
});
