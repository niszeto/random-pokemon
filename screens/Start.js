import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import questionMark from "../assets/question-mark.png";

import Circles from "../components/start/Circles";
import Screen from "../components/start/Screen";
import Button from "../components/start/Button";

const Start = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Circles />
      </View>

      <View style={styles.mainContentContainer}>
        <Screen source={questionMark} />
      </View>

      <View style={styles.footerContainer}>
        <Button onPress={() => props.navigation.navigate("Display")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF373D"
  },

  headerContainer: {
    flex: 1,
    width: "100%"
  },

  mainContentContainer: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  footerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Start;
