import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface HeaderProps extends WithTranslation {}

class Header extends Component<HeaderProps, {}> {
  render() {
    return <div className="header">HEADER</div>;
  }
}

export default withTranslation("general")(Header);
