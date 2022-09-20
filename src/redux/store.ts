import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/User/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import logger from 'redux-logger'
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
import thunk from "redux-thunk";

// root reducer
const rootReducer = combineReducers({
  user: userReducer,
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
  middleware: [thunk],
});

export default store;
