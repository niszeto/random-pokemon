import React from "react";
import { getData, setData } from "./functions/asyncStorage";
import GenerationRanges from "./assets/GenerationRanges";

export const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GENERATION":
      setData("generation", action.payload);
      return {
        generation: action.payload
      };
    case "CHANGE_START_RANGE":
      return {
        startRange: action.payload
      };
    case "CHANGE_END_RANGE":
      return {
        endRange: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: "All",
      startRange: 1,
      endRange: 803,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  async componentDidMount() {
    const data = await getData("generation");

    if (data !== null) {
      const generationData = GenerationRanges.find(currentGeneration => {
        return currentGeneration.generation === data;
      });
      const { generation, endRange, startRange } = generationData;

      this.setState({ generation, endRange, startRange });
    } else {
      await setData("generation", "All");
    }
  }

  render() {
    console.log(this.state);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
