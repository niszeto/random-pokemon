import React from "react";
import { View, Image } from "react-native";

const Sprite = props => {
  const { sprite } = props;

  return (
    <View style={{ backgroundColor: "black" }}>
      <Image style={{ height: 300, width: 350 }} source={{ uri: sprite }} />
    </View>
  );
};

export default Sprite;
