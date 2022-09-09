import React from "react";
import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "LOGIN", payload: { name: "Juhan" } });
  }, [dispatch]);

  return <Homepage />;
}

export default App;
