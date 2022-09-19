import React from "react";
import "./App.scss";
import { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SearchResult from "./pages/SearchResult/SearchResult";
import User from "./pages/User/User";
import Message from "./pages/Message/Message";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import OtpPage from "./pages/OtpPage/OtpPage";
import { useSelector } from "react-redux";
import { State } from "./typings/redux-typings/redux-typings";

function App() {
  // const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Homepage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/user" element={<User />} />
        <Route path="/message" element={<Message />} />
        <Route path="/enter-otp" element={<OtpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
