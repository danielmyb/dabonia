import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface TopicsProps extends WithTranslation {}

class Topics extends Component<TopicsProps, {}> {
  render() {
    return <div>MY TOPICS</div>;
  }
}

export default withTranslation("")(Topics);
