import React from "react";
import { View, Text, StyleSheet, Picker, Button } from "react-native";

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
          title="Settings"
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
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Settings;
