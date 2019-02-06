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
            onRefresh={this.getPokemon}
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

  render() {
    const { isLoading } = this.state;

    return isLoading ? Loading() : this.displayData();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%"
  },

  headerContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow"
  },

  spriteContainer: {
    alignItems: "center"
  },

  typesStyle: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "yellow"
  }
});

// export default props => (
//   <Consumer>
//     {value => {
//       return <Display {...props} value={value} />;
//     }}
//   </Consumer>
// );

export default class ContextWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Pokemon",
      headerStyle: {
        backgroundColor: "#F8EE5F"
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

// export default Display;
