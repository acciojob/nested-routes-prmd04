import React from 'react';
import { Link } from 'react-router-dom';

const SubLayout = ({ pages }) => {
  return (
    <nav className="sub-navigation">
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubLayout;