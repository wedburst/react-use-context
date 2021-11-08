import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Componentes
import { HomeScreen } from "../components/HomeScreen";
import { AboutScreen } from "../components/AboutScreen";
import { LoginScreen } from "../components/LoginScreen";
import { NavBar } from "../components/ui/NavBar";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
