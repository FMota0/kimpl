import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  return (
    <div className="bg-raisin-black">
      <div className="flex ml2 items-center">
        <Link to="/" style={{textDecoration: 'none'}}>
          <p className="white pl3 f3">
            Kimpl
          </p>
        </Link>
        <Link to="/new" style={{textDecoration: 'none'}}>
          <p className="white pl3 f4 pr3">
            New
          </p>
        </Link>

        <input
          id="search"
          className="input-reset ba b--black-20 pl3 f4 db w-20"
          type="text"
          aria-describedby="name-desc"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyUp={e => {
            const { key } = e;
            if (key === 'Enter') {
              history.push(`/search?i=${search}`);
              history.go();
            }
          }}
        />
      </div>
    </div>
  )
};

export default Header;