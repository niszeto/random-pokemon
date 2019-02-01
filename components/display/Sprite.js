import React from "react";
import { View, Image } from "react-native";

const Sprite = props => {
  const { sprite } = props;

  return (
    <View>
      <Image style={{ height: 250, width: 250 }} source={{ uri: sprite }} />
    </View>
  );
};

export default Sprite;
