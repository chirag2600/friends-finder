import React from "react";
import "./styles.css";

function Header() {
  return (
    <nav>
      <h3>Friend.finder</h3>
      <ul className="list">
        <li>
          <a>Teams</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Issues</a>
        </li>
        <li>
          <a>Info</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
