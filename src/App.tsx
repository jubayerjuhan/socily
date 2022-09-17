import React from "react";
import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SearchResult from "./pages/SearchResult/SearchResult";
import User from "./pages/User/User";
import Message from "./pages/Message/Message";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: "SET_THEME", payload: "dark" });
  }, [dispatch]);

  return <Message />;
}

export default App;
