import React from "react";
import { Link, Outlet } from "react-router-dom";

const Women = () => {
  return (
    <div>
      <h2>Women's Section</h2>
      <ul>
        <li><Link to="grooming">Grooming</Link></li>
        <li><Link to="Shirt">Shirt</Link></li>
        <li><Link to="trouser">Trouser</Link></li>
        <li><Link to="jewellery">Jewellery</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Women;
