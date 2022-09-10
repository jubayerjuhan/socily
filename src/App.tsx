import React from "react";
import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({ type: "SET_THEME", payload: "dark" });
  }, [dispatch]);

  return <Homepage />;
}

export default App;
