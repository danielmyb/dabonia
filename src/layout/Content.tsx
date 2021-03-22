import React, { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Routes from "../app/Routes";

interface ContentProps extends WithTranslation {}

class Content extends Component<ContentProps, {}> {
  render() {
    return (
      <div className="content">
        <Routes />
      </div>
    );
  }
}

export default withTranslation("general")(Content);
