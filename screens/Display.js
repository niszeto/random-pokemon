import React from "react";
import { View, Text } from "react-native";

import Loading from "./Loading";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemonData: {}
    };
  }

  displayPokemonData = () => {
    console.log(this.state.pokemonData);

    return (
      <View>
        <Text>Display Shit here</Text>
      </View>
    );
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");

    const responseJson = await response.json();

    this.setState({ isLoading: false, pokemonData: responseJson });
  }

  render() {
    const { isLoading } = this.state;

    return isLoading ? Loading() : this.displayPokemonData();
  }
}

export default Display;
