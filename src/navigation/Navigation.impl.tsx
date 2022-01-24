import React from "react";
import { INavigation } from "./Navigation.interface";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "@/pages";

const Navigation: React.FC<INavigation.IProps> = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
