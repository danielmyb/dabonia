import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface Content2Props extends WithTranslation {}

class Content2 extends Component<Content2Props, {}> {
  render() {
    return <div>CONTENT2</div>;
  }
}

export default withTranslation("general")(Content2);
