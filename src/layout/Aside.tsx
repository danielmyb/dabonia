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
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                <span>
                  <img
                    className="menu-icon"
                    alt="news"
                    src="https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_07.jpg"
                  />
                </span>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/affixes" className="nav-link">
                <span>
                  <img
                    className="menu-icon"
                    alt="affixes"
                    src="https://wow.zamimg.com/images/wow/icons/large/inv_relics_hourglass.jpg"
                  />
                </span>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/topics" className="nav-link">
                <span>
                  <img
                    className="menu-icon"
                    alt="affixes"
                    src="https://wow.zamimg.com/images/wow/icons/large/achievement_faction_lorewalkers.jpg"
                  />
                </span>
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled">
            <li className="nav-item">
              <Link to="/characters" className="nav-link">
                <span>
                  <img
                    className="menu-icon"
                    alt="affixes"
                    src="https://wow.zamimg.com/images/wow/icons/large/spell_holy_prayerofspirit.jpg"
                  />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withTranslation("general")(Aside);
