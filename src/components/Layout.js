import React from "react";

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
