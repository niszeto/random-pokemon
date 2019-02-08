import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const Button = props => {
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.buttonTextContainer}>
        <Text style={styles.textStyle}>Catch Me!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F8F3",
    height: "80%",
    width: "90%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black"
  },

  buttonTextContainer: {
    backgroundColor: "#01FFFF",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    width: "95%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black"
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

export default Button;
