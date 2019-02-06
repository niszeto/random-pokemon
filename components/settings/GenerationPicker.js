import React from "react";
import { View, StyleSheet, Picker } from "react-native";

class GenerationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: "all"
    };
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.generation}
        style={{ height: 300, width: "100%", backgroundColor: "red" }}
        onValueChange={(itemValue, itemIndex) => {
          console.log(itemValue);
          this.setState({ generation: itemValue });
        }}
      >
        <Picker.Item label="All" value="all" />
        <Picker.Item label="1" value="one" />
      </Picker>
    );
  }
}

export default GenerationPicker;
