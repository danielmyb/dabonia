import React, { PureComponent } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import characterUtils from "../../utils/characterUtils";

interface CharacterProps extends WithTranslation {
  character: any;
}

class CharacterWidget extends PureComponent<CharacterProps, {}> {
  render() {
    const { character, t } = this.props;
    return (
      <table className="text-left">
        <tbody>
          <tr>
            <td>
              {characterUtils
                .resolveTranslation(character.active_title.display_string)
                .replaceAll("{name}", character.name)}
            </td>
          </tr>
          <tr>
            <td>
              {t("characterLevel")} {character.level}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default withTranslation("character")(CharacterWidget);
