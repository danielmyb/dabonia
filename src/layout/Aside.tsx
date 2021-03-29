import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import authService from "../database/authService";

interface AsideProps extends WithTranslation {}

class Aside extends Component<AsideProps, {}> {
  render() {
    return (
      <div className="aside">
        <span className="text-white">ASIDE</span>
        <div className="text-white position-absolute w-100" style={{ bottom: "0" }}>
          <Link to={authService.getUser() ? "/logout" : "/login"}>{authService.getUser() ? "LOGOUT" : "LOGIN"}</Link>
        </div>
      </div>
    );
  }
}

export default withTranslation("general")(Aside);
