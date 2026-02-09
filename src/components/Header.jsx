import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Host App</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
