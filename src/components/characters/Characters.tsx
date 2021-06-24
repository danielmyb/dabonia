import React, { Component } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import dbCharacterService from "../../database/dbCharacterService";
import SplashScreen from "../general/Splashscreen";
import CharacterWidget from "./CharacterWidget";

interface CharactersProps extends WithTranslation {}

interface CharactersState {
  characters?: Array<any>;
}

class Characters extends Component<CharactersProps, CharactersState> {
  constructor(props: CharactersProps) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const charData = await dbCharacterService.getCharacters();
    const characters = [];
    for (let cData of charData) {
      characters.push(JSON.parse(new Buffer(cData.body.buffer, "base64").toString()));
    }
    this.setState({ characters });
  }

  render() {
    const { characters } = this.state;
    if (!characters) {
      return <SplashScreen />;
    }
    console.log("CH", characters);
    return (
      <div className="row m-0">
        {characters.map((c, key) => {
          return (
            <div className="col-12 col-lg-6" key={key}>
              <CharacterWidget character={c} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default withTranslation("character")(Characters);
