import { Component } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Header from "./Header";
import Aside from "./Aside";
import Footer from "./Footer";
import Content from "./Content";

interface LayoutProps extends WithTranslation {}

class Layout extends Component<LayoutProps, {}> {
  render() {
    return (
      <div className="app">
        <Aside />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default withTranslation("general")(Layout);
