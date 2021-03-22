import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface AsideProps extends WithTranslation {}

class Aside extends Component<AsideProps, {}> {
  render() {
    return (
      <div className="aside">
        <span className="text-white">ASIDE</span>
      </div>
    );
  }
}

export default withTranslation("general")(Aside);
