import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-raisin-black">
      <div className="flex ml2 items-center">
        <Link to="/" style={{textDecoration: 'none'}}>
          <p className="white pl3 f3">
            Kimpl
          </p>
        </Link>
        <Link to="/new" style={{textDecoration: 'none'}}>
          <p className="white pl3 f4">
            New
          </p>
        </Link>
      </div>
    </div>
  )
};

export default Header;