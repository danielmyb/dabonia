import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface AffixesProps extends WithTranslation {}

class Affixes extends Component<AffixesProps, {}> {
  render() {
    return <div>CURRENT AFFIXES</div>;
  }
}

export default withTranslation("")(Affixes);
