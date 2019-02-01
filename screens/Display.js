import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Loading from "./Loading";

import Name from "../components/display/Name";
import PokedexNumber from "../components/display/PokedexNumber";

import Sprite from "../components/display/Sprite";

import Types from "../components/display/Types";

import Abilities from "../components/display/Abilities";

import Weight from "../components/display/Weight";
import Height from "../components/display/Height";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    };
  }

  displayData = () => {
    const {
      name,
      id,
      sprites: { front_default },
      types,
      abilities,
      weight,
      height,
      stats
    } = this.state.data;

    console.log(stats);

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Name name={name} />
          <PokedexNumber number={id} />
        </View>

        <View style={styles.spriteContainer}>
          <Sprite sprite={front_default} />
        </View>

        <View style={styles.typesStyle}>
          <Types types={types.reverse()} />
        </View>

        {/* row style */}
        <View style={styles.typesStyle}>
          <Abilities abilities={abilities.reverse()} />
        </View>

        <Weight weight={weight} />
        <Height height={height} />
      </View>
    );
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/6/");

    const responseJson = await response.json();

    this.setState({ isLoading: false, data: responseJson });
  }

  render() {
    const { isLoading } = this.state;

    return isLoading ? Loading() : this.displayData();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "red"
  },

  headerContainer: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  spriteContainer: {},

  typesStyle: {
    flexDirection: "row"
  }
});

export default Display;
