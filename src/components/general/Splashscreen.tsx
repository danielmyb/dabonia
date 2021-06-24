import React, { Component } from "react";

interface SplashScreenProps {
  additionalSVGStyle?: any;
}

class SplashScreen extends Component<SplashScreenProps> {
  render() {
    const { additionalSVGStyle } = this.props;
    return (
      <div className="splash-screen-relative" style={{ minHeight: "150px" }}>
        <svg className="splash-spinner" viewBox="0 0 50 50" style={additionalSVGStyle ? additionalSVGStyle : {}}>
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
        </svg>
      </div>
    );
  }
}

export default SplashScreen;
