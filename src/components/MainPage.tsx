import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface MainPageProps extends WithTranslation {}

class MainPage extends Component<MainPageProps, {}> {
  render() {
    return <div>MAINPAGE</div>;
  }
}

export default withTranslation("general")(MainPage);
