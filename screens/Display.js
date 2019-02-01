import React from "react";
import { View, ScrollView, StyleSheet, RefreshControl } from "react-native";

import Loading from "./Loading";

import getRandomPokemonData from "../functions/getRandomPokemonData";

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

  onRefresh = async () => {
    this.setState({ isLoading: true });

    const pokemonData = await getRandomPokemonData();

    this.setState({ isLoading: false, data: pokemonData });
  };

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

    return (
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
          />
        }
      >
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

        <View style={styles.typesStyle}>
          <Abilities abilities={abilities.reverse()} />
        </View>

        <View style={styles.typesStyle}>
          <Weight weight={weight} />
          <Height height={height} />
        </View>
      </ScrollView>
    );
  };

  async componentDidMount() {
    this.onRefresh();
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
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  spriteContainer: {},

  typesStyle: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});

export default Display;
