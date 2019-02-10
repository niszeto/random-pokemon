import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Types = props => {
  const { types } = props;

  return (
    <View style={styles.container}>
      {types.map((type, slot) => {
        const {
          type: { name }
        } = type;

        return (
          <View style={getTypeColor(name)} key={slot}>
            <Text style={styles.textStyle}>{name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const getTypeColor = type => {
  switch (type) {
    case "normal":
      return styles.normalTextContainer;
    case "fire":
      return styles.fireTextContainer;
    case "water":
      return styles.waterTextContainer;
    case "grass":
      return styles.grassTextContainer;
    case "electric":
      return styles.electricTextContainer;
    case "ice":
      return styles.iceTextContainer;
    case "fighting":
      return styles.fightingTextContainer;
    case "poison":
      return styles.poisonTextContainer;
    case "ground":
      return styles.groundTextContainer;
    case "flying":
      return styles.flyingTextContainer;
    case "psychic":
      return styles.psychicTextContainer;
    case "bug":
      return styles.bugTextContainer;
    case "rock":
      return styles.rockTextContainer;
    case "ghost":
      return styles.ghostTextContainer;
    case "dragon":
      return styles.dragonTextContainer;
    case "dark":
      return styles.darkTextContainer;
    case "steel":
      return styles.steelTextContainer;
    case "fairy":
      return styles.fairyTextContainer;
    default:
      return styles.textContainer;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#FFFFFF",
    padding: 5
  },

  grassTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#78C850",
    padding: 5
  },

  poisonTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#A040A0",
    padding: 5
  },

  fireTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#F08030",
    padding: 5
  },

  flyingTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#A890F0",
    padding: 5
  },

  waterTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#6890F0",
    padding: 5
  },

  bugTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#A8B820",
    padding: 5
  },

  normalTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#A8A878",
    padding: 5
  },

  electricTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#F8D030",
    padding: 5
  },

  groundTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#E0C068",
    padding: 5
  },

  fairyTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#EE99AC",
    padding: 5
  },

  fightingTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#C03028",
    padding: 5
  },

  psychicTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#F85888",
    padding: 5
  },

  rockTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#B8A038",
    padding: 5
  },

  iceTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#98D8D8",
    padding: 5
  },

  dragonTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#7038F8",
    padding: 5
  },

  darkTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#705848",
    padding: 5
  },

  ghostTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#705898",
    padding: 5
  },

  steelTextContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "#B8B8D0",
    padding: 5
  },

  textContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "white",
    padding: 5
  },
  textStyle: {
    color: "white",
    fontSize: 25
  }
});

export default Types;
