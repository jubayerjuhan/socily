import { combineReducers } from "@reduxjs/toolkit";
import { userReduer } from "./reducers/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { themeReducer } from "./reducers/themeReducer";

// root reducer
const rootReducer = combineReducers({
  user: userReduer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

// created reducer to be persisted at local storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

//

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
