import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="navigation">
        <Link to="/">
          <h1>
            <span>Welcome to my Portfolio Page</span>
          </h1>
        </Link>

        <Link to={"/error-boundary"} className="error-link">
          Test Error Boundary
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
