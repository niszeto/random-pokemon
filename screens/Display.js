import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Button
} from "react-native";

import Loading from "./Loading";

import getRandomPokemonData from "../functions/getRandomPokemonData";

import Name from "../components/display/Name";
import PokedexNumber from "../components/display/PokedexNumber";

import Sprite from "../components/display/Sprite";

import Types from "../components/display/Types";

import Abilities from "../components/display/Abilities";

import Weight from "../components/display/Weight";
import Height from "../components/display/Height";

import { Consumer } from "../context";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    };
  }

  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    this.setState({ isLoading: true });

    const { startRange, endRange } = this.props.value;

    const pokemonData = await getRandomPokemonData(startRange, endRange);

    this.setState({ isLoading: false, data: pokemonData });
  };

  getTypeColor = type => {
    switch (type) {
      case "normal":
        return styles.normalContainer;
      case "fire":
        return styles.fireContainer;
      case "water":
        return styles.waterContainer;
      case "grass":
        return styles.grassContainer;
      case "electric":
        return styles.electricContainer;
      case "ice":
        return styles.iceContainer;
      case "fighting":
        return styles.fightingContainer;
      case "poison":
        return styles.poisonContainer;
      case "ground":
        return styles.groundContainer;
      case "flying":
        return styles.flyingContainer;
      case "psychic":
        return styles.psychicContainer;
      case "bug":
        return styles.bugContainer;
      case "rock":
        return styles.rockContainer;
      case "ghost":
        return styles.ghostContainer;
      case "dragon":
        return styles.dragonContainer;
      case "dark":
        return styles.darkContainer;
      case "steel":
        return styles.steelContainer;
      case "fairy":
        return styles.fairyContainer;
      default:
        return styles.container;
    }
  };

  getMainType = types => {
    const {
      type: { name }
    } = types[0];

    return name;
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

    let mainType = this.getMainType(types.reverse());

    return (
      <ScrollView
        contentContainerStyle={this.getTypeColor(mainType)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.getPokemon}
          />
        }
      >
        <View style={styles.bannerContainer}>
          <Name name={name} mainType={mainType} />
        </View>

        <View style={styles.numberAndTypesContainer}>
          <PokedexNumber number={id} />
          <Types types={types} />
        </View>

        <View style={styles.spriteContainer}>
          <Sprite sprite={front_default} />
        </View>

        <View style={styles.typesStyle}>
          <Abilities abilities={abilities} />
        </View>

        {/* <View style={styles.typesStyle}>
          <Weight weight={weight} />
          <Height height={height} />
        </View> */}
      </ScrollView>
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? Loading() : this.displayData()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF373D"
  },

  normalContainer: {
    flex: 1,
    backgroundColor: "#A8A878"
  },
  fireContainer: {
    flex: 1,
    backgroundColor: "#F08030"
  },
  waterContainer: {
    flex: 1,
    backgroundColor: "#6890F0"
  },
  grassContainer: {
    flex: 1,
    backgroundColor: "#78C850"
  },
  electricContainer: {
    flex: 1,
    backgroundColor: "#F8D030"
  },
  iceContainer: {
    flex: 1,
    backgroundColor: "#98D8D8"
  },
  fightingContainer: {
    flex: 1,
    backgroundColor: "#C03028"
  },
  poisonContainer: {
    flex: 1,
    backgroundColor: "#A040A0"
  },
  groundContainer: {
    flex: 1,
    backgroundColor: "#E0C068"
  },
  flyingContainer: {
    flex: 1,
    backgroundColor: "#A890F0"
  },
  psychicContainer: {
    flex: 1,
    backgroundColor: "#F85888"
  },
  bugContainer: {
    flex: 1,
    backgroundColor: "#A8B820"
  },
  rockContainer: {
    flex: 1,
    backgroundColor: "#B8A038"
  },
  ghostContainer: {
    flex: 1,
    backgroundColor: "#705898"
  },
  dragonContainer: {
    flex: 1,
    backgroundColor: "#7038F8"
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#705848"
  },
  steelContainer: {
    flex: 1,
    backgroundColor: "#B8B8D0"
  },
  fairyContainer: {
    flex: 1,
    backgroundColor: "#EE99AC"
  },

  bannerContainer: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "yellow"
  },

  numberAndTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 100
  },

  spriteContainer: {
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "blue"
  },

  typesStyle: {
    height: 75,
    // width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
    // backgroundColor: "yellow"
  }
});

export default class ContextWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Pokemon",
      headerStyle: {
        backgroundColor: "#FF373D"
      },

      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
      },
      headerTintColor: "white",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
      )
    };
  };

  render() {
    return (
      <Consumer>
        {value => {
          return <Display {...this.props} value={value} />;
        }}
      </Consumer>
    );
  }
}
