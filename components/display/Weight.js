import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weight = props => {
  const { weight } = props;

  return (
    <View>
      <Text>{`${weight} hectograms`}</Text>
    </View>
  );
};

export default Weight;
