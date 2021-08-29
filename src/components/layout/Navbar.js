import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import GithubLogin from '../GithubLogin'
import { githubConfig } from "../../config";

const Navbar = ({ title, icon }) => {

  const onSuccess = response => console.log(response);
  const onFailure = response => console.error(response);

  return (
    <div className="navbar bg-primary">
      <Link to="/"><h1>
        <i className={icon}> </i> {title}
      </h1></Link>

      <ul>
        <li>
          {" "}
          <Link to="/get-user"> Public</Link>
        </li>
        <li>
          {" "}
          <GithubLogin clientId={githubConfig.clientId}
            redirectUri="http://localhost:3000/"
            onSuccess={onSuccess}
            onFailure={onFailure} />
        </li>
        <li>
          {" "}
          <Link to="/about"> About</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
