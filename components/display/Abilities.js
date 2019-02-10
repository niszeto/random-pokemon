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
      <Text style={styles.hiddenAbilityTextStyle}>Hidden Ability</Text>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textContainer: {
    margin: 10,
    padding: 5,
    justifyContent: "space-evenly",
    alignItems: "center"
  },

  hiddenAbilityTextStyle: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 18
  },

  textStyle: {
    fontSize: 18
  }
});

export default Abilities;
