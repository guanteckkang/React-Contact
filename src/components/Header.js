import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ui fixed menu ">
      {/* fixed */}
      <div className="ui center aligned container">
        <h2 className="ui center aligned container">GTK's YELLOW BOOK</h2>
        <Link to="/">
          <button className="ui button blue left">Home</button>
        </Link>
        <Link to="/addcontact">
          <button className="ui button blue left">Add</button>
        </Link>
      </div>
    </div>
  );
}
