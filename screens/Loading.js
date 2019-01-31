import React from "react";
import { StyleSheet, View, Text, ActivityIndicator, Image } from "react-native";

import pokedex from "../assets/pokedex.png";

const Loading = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={pokedex} style={styles.imageStyle} />
      </View>

      <Text style={styles.textStyle}>Updating Pokedex</Text>

      <View style={styles.activityIndicatiorContainer}>
        <ActivityIndicator size="large" color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#F8EE5F"
  },

  imageContainer: {},

  imageStyle: {
    height: 200,
    width: 300,
    resizeMode: "contain"
  },

  textStyle: {
    fontSize: 30,
    color: "white",
    textAlign: "center"
  },

  activityIndicatiorContainer: {
    margin: 20
  }
});

export default Loading;
