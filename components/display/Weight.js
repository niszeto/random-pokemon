import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weight = props => {
  const { weight } = props;

  return (
    <View>
      <Text>{`${weight / 10} kilograms`}</Text>
    </View>
  );
};

export default Weight;
