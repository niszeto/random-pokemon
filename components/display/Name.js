import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Name = props => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue"
  },

  textStyle: {
    fontSize: 50
  }
});

export default Name;
