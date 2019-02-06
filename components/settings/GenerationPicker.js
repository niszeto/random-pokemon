import React from "react";
import { View, StyleSheet, Picker } from "react-native";
import GenerationRanges from "../../assets/GenerationRanges";

class GenerationPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: "All"
    };
  }

  render() {
    let pickerItems = GenerationRanges.map(currentGeneration => {
      const { generation, id } = currentGeneration;

      return <Picker.Item label={generation} value={generation} key={id} />;
    });

    return (
      <Picker
        selectedValue={this.state.generation}
        style={{ height: 300, width: "100%", backgroundColor: "red" }}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({ generation: itemValue });
        }}
      >
        {pickerItems}
      </Picker>
    );
  }
}

export default GenerationPicker;
