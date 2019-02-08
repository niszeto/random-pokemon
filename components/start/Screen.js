import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import questionMark from "../../assets/question-mark.png";

const Screen = props => {
  return (
    <View style={styles.screenContainer}>
      <Image source={questionMark} style={styles.imageStyle} />
      <Text style={styles.textStyle}>Who's That Pokemon?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: "95%",
    width: "95%",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "black",
    backgroundColor: "#FFFFFF"
  },

  imageStyle: {
    height: 350,
    width: 250,
    resizeMode: "contain"
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

export default Screen;
