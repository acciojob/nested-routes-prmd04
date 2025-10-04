import React from "react";
import "./../styles/App.css";
import { Routes, Route, Link } from "react-router-dom";
import Women from "./Women";
import Home from "./Home";
import Grooming from "./Grooming";
import Jewellery from "./Jewellery";
import Shirt from "./Shirt";
import Trouser from "./Trouser";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="women" element={<Women />}>
            <Route path="grooming" element={<Grooming />} />
            <Route path="jewellery" element={<Jewellery />} />
            <Route path="shirt" element={<Shirt />} />
            <Route path="trouser" element={<Trouser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
