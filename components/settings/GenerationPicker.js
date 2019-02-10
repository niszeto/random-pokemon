import React from "react";
import { View, StyleSheet, Picker } from "react-native";
import GenerationRanges from "../../assets/GenerationRanges";
import { Consumer } from "../../context";

class GenerationPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pickerItems = GenerationRanges.map(currentGeneration => {
      const { generation, id } = currentGeneration;

      return <Picker.Item label={generation} value={generation} key={id} />;
    });

    return (
      <Consumer>
        {value => {
          const { dispatch, generation } = value;

          return (
            <Picker
              selectedValue={generation}
              style={styles.container}
              prompt="Select the Generation"
              onValueChange={(itemValue, itemIndex) => {
                const generationInformation = GenerationRanges[itemIndex];
                const {
                  endRange,
                  startRange,
                  generation
                } = generationInformation;

                dispatch({ type: "CHANGE_GENERATION", payload: generation });
                dispatch({ type: "CHANGE_START_RANGE", payload: startRange });
                dispatch({ type: "CHANGE_END_RANGE", payload: endRange });
              }}
            >
              {pickerItems}
            </Picker>
          );
        }}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // height: "30%",
    width: "100%"
    // backgroundColor: "red"
  }
});

export default GenerationPicker;
