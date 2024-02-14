import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Thankyou } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/thankyou" Component={Thankyou} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
