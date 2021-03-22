import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface Content1Props extends WithTranslation {}

class Content1 extends Component<Content1Props, {}> {
  render() {
    return <div>CONTENT1</div>;
  }
}

export default withTranslation("general")(Content1);
