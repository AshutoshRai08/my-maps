import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";
import Users from "./users/pages/user";
import Places from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Authentication from "./users/pages/authentication";
import { AuthContext } from "./shared/context/auth-context";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  let routes;
  if (isLoggedIn) {
    debugger;
    routes=(
    <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/new" element={<Places />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="*" element={<Navigate to="/" />} />       
      </Routes>)
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/user/authentication" element={<Authentication />} />
        <Route path="*" element={<Navigate to="/user/authentication" />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation/>
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
