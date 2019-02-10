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
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#F5F8F3"
  },

  textContainer: {
    height: "85%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#01FFFF"
  },

  textStyle: {
    fontSize: 35,
    fontWeight: "bold"
  }
});

export default Name;
