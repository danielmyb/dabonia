import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import authService from "../database/authService";

interface AsideProps extends WithTranslation {}

class Aside extends Component<AsideProps, {}> {
  render() {
    return (
      <div className="aside">
        <Link to="/">HOME</Link>
        <div className="text-white position-absolute w-100" style={{ bottom: "0" }}>
          <Link to={authService.getUser() ? "/logout" : "/login"}>{authService.getUser() ? "LOGOUT" : "LOGIN"}</Link>
        </div>
        <nav className="mt-5">
          <ul className="list-unstyled">
            <li className="nav-item">TBD:1</li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">TBD:2</li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">TBD:3</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation("general")(Aside);
