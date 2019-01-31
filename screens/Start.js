import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

import questionMark from "../assets/question-mark.png";

const Start = props => {
  return (
    <View style={styles.container}>
      <Image source={questionMark} style={styles.imageStyle} />

      <Text>Who's That Pokemon?</Text>

      <Button title="Catch" onPress={() => console.log("pressed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },

  imageStyle: {
    height: 200,
    width: 200,
    resizeMode: "contain"
  }
});

export default Start;
