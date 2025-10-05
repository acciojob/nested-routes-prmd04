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
    <main>
      <div>
        <h3>Index</h3>
      </div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="women" element={<Women />}>
            <Route path="grooming" element={<Grooming />} />
            <Route path="jewellery" element={<Jewellery />} />
            <Route path="shirt" element={<Shirt />} />
            <Route path="trouser" element={<Trouser />} />
          </Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
