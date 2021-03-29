import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface HeaderProps extends WithTranslation {}

class Header extends Component<HeaderProps, {}> {
  render() {
    return (
      <div className="header">
        <div className="h-100 text-right">
          <span className="m-4 font-weight-bold h2 align-middle">dabonia</span>
        </div>
      </div>
    );
  }
}

export default withTranslation("general")(Header);
