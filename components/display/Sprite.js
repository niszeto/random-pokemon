import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Sprite = props => {
  const { sprite } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: sprite }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 5,
    backgroundColor: "#FFFEFD",
    margin: 10
  },

  imageStyle: {
    height: "95%",
    width: "95%",
    resizeMode: "contain"
  }
});

export default Sprite;
