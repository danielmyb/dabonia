import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface FooterProps extends WithTranslation {}

class Footer extends Component<FooterProps, {}> {
  render() {
    return <div className="footer">FOOTER</div>;
  }
}

export default withTranslation("general")(Footer);
