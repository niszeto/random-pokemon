import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Abilities = props => {
  const { abilities } = props;

  return (
    <View style={styles.container}>
      {abilities.map(({ ability, is_hidden, slot }) => {
        const { name } = ability;

        return is_hidden
          ? displayHiddenAbility(name, slot)
          : displayRegularAbility(name, slot);
      })}
    </View>
  );
};

const displayRegularAbility = (name, slot) => {
  return (
    <View style={styles.textContainer} key={slot}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const displayHiddenAbility = (name, slot) => {
  return (
    <View style={styles.textContainer} key={slot}>
      <Text style={styles.textStyle}>Hidden Ability</Text>
      <Text style={styles.textStyle}>{name}</Text>
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
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {}
});

export default Abilities;
