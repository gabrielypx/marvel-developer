import React from "react";
import { BrowserRouter, Routes as RoutesRouter, Route } from "react-router-dom";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRouter>
        <Route path="/home" element={<Home />} />
      </RoutesRouter>
    </BrowserRouter>
  );
}

export default Routes;
