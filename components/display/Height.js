import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Height = props => {
  const { height } = props;

  return (
    <View>
      <Text>{`${height} decimetres`}</Text>
    </View>
  );
};

export default Height;
