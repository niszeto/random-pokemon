import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Name = props => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#F5F8F3"
  },

  textContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 10,
    // borderWidth: 3,
    borderColor: "black"
    // backgroundColor: "#01FFFF"
  },

  textStyle: {
    fontSize: 35,
    fontWeight: "bold"
  },

  normalContainer: {
    backgroundColor: "#A8A878"
  },
  fireContainer: {
    backgroundColor: "#F08030"
  },
  waterContainer: {
    backgroundColor: "#6890F0"
  },
  grassContainer: {
    backgroundColor: "#78C850"
  },
  electricContainer: {
    backgroundColor: "#F8D030"
  },
  iceContainer: {
    backgroundColor: "#98D8D8"
  },
  fightingContainer: {
    backgroundColor: "#C03028"
  },
  poisonContainer: {
    backgroundColor: "#A040A0"
  },
  groundContainer: {
    backgroundColor: "#E0C068"
  },
  flyingContainer: {
    backgroundColor: "#A890F0"
  },
  psychicContainer: {
    backgroundColor: "#F85888"
  },
  bugContainer: {
    backgroundColor: "#A8B820"
  },
  rockContainer: {
    backgroundColor: "#B8A038"
  },
  ghostContainer: {
    backgroundColor: "#705898"
  },
  dragonContainer: {
    backgroundColor: "#7038F8"
  },
  darkContainer: {
    backgroundColor: "#705848"
  },
  steelContainer: {
    backgroundColor: "#B8B8D0"
  },
  fairyContainer: {
    backgroundColor: "#EE99AC"
  }
});

export default Name;
