import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PokedexNumber = props => {
  const { number } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFEFD",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "black"
  },

  textStyle: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default PokedexNumber;
