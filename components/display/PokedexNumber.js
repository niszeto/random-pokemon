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
    backgroundColor: "red"
  },

  textStyle: {
    fontSize: 25
  }
});

export default PokedexNumber;
