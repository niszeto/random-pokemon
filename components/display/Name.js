import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Name = props => {
  const { name, mainType } = props;

  return (
    <View style={getTypeColor(mainType)}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{name}</Text>
      </View>
    </View>
  );
};

const getTypeColor = type => {
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
    // height: "85%",
    // width: "95%",
    // justifyContent: "center",
    // alignItems: "center"
    // borderRadius: 10,
    // borderWidth: 3,
    // borderColor: "black"
    // backgroundColor: "#01FFFF"
  },

  textStyle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "white"
  },

  normalContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#707048"
  },
  fireContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#AB4F0D"
  },
  waterContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#144BCC"
  },
  grassContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#4C8C2C"
  },
  electricContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#BB9707"
  },
  iceContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#42AEAE"
  },
  fightingContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#7B1E19"
  },
  poisonContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#6A2A6A"
  },
  groundContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#B28C24"
  },
  flyingContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#4D1EDC"
  },
  psychicContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#D30945"
  },
  bugContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#6B7515"
  },
  rockContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#796A25"
  },
  ghostContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#4A3A64"
  },
  dragonContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#3E07C0"
  },
  darkContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#48382E"
  },
  steelContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#666699"
  },
  fairyContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: "#DA254C"
  }
});

export default Name;
