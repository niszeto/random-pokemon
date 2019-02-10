import React from "react";
import { View, Text, StyleSheet, Picker, Button } from "react-native";
import GenerationPicker from "../components/settings/GenerationPicker";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Settings",
      headerStyle: {
        backgroundColor: "#FF373D"
      },

      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
      },

      headerTintColor: "white",
      headerLeft: (
        <Button
          title="Pokemon"
          onPress={() => {
            navigation.navigate("Display");
          }}
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Select the Generation</Text>
        </View>

        <GenerationPicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#F8EE5F"
  },

  textContainer: {
    margin: 5,
    padding: 5
  },

  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

export default Settings;
