import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Loading from "./screens/Loading";
import Start from "./screens/Start";
import Display from "./screens/Display";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Loading /> */}
        {/* <Start /> */}
        <Display />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
