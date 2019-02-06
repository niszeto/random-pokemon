import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { Provider } from "./context";

import { createAppContainer } from "react-navigation";
import RootSwitch from "./navigation/RootSwitch";

const AppContainer = createAppContainer(RootSwitch);

class App extends React.Component {
  render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  }
});
