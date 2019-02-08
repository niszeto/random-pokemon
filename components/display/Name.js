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
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "blue"
  },

  textContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "red"
  },

  textStyle: {
    fontSize: 35,
    fontWeight: "bold"
  }
});

export default Name;
