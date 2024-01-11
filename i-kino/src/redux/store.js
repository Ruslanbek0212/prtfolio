import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./UsersSlice";
// import { filmsApi } from "./FilmsSlice";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware)
});