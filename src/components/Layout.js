import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h3>Index</h3>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/women">Women</Link></li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
