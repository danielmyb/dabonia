import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface FooterProps extends WithTranslation {}

class Footer extends Component<FooterProps, {}> {
  render() {
    const { t } = this.props;
    return (
      <div className="footer">
        <div className="row">
          <div className="col">(c) 2021 - dabone</div>
          <div className="col">
            <Link to={"/privacy"}>{t("privacy")}</Link>
          </div>
          <div className="col">
            <Link to={"/contact"}>{t("contact")}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("general")(Footer);
