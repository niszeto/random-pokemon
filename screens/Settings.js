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
        backgroundColor: "#F8EE5F"
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

  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <GenerationPicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
  }
});

export default Settings;
