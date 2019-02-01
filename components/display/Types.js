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
    alignItems: "center"
  },
  textContainer: {
    margin: 5,
    backgroundColor: "blue"
  },
  textStyle: {}
});

export default Types;
