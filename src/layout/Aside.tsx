import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import authService from "../database/authService";

interface AsideProps extends WithTranslation {}

class Aside extends Component<AsideProps, {}> {
  render() {
    const { t } = this.props;
    const user = authService.getUser();
    return (
      <div className="aside">
        <Link to="/">HOME</Link>
        <div className="position-absolute w-100" style={{ bottom: "0" }}>
          {user && user.customData.role === "Admin" && (
            <nav>
              <ul className="list-unstyled">
                <li className="nav-item">{t("administration")}</li>
              </ul>
            </nav>
          )}
          <Link to={user ? "/logout" : "/login"} className="font-weight-bold">
            {t(user ? "logout" : "login")}
          </Link>
        </div>
        <nav className="mt-5">
          <ul className="list-unstyled">
            <li className="nav-item">{t("news")}</li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">AFFIXES</li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">TOPICS</li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">CHARACTERS</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation("general")(Aside);
