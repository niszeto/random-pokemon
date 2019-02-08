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
          <View style={styles.textContainer} key={slot}>
            <Text style={styles.textStyle}>{name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "red",
    padding: 5
  },

  textContainer: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 3,
    backgroundColor: "blue",
    padding: 5
  },
  textStyle: {
    color: "white",
    fontSize: 25
  }
});

export default Types;
