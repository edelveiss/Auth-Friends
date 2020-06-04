import React from "react";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <header className="App-header">
      <div className="menu">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
}
export default Home;
