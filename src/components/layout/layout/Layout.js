import React from 'react';
import './Layout.modules.css';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      { children }
    </div>
  );
};

export default Layout;