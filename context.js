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

  checkAsyncStorage = async () => {
    const data = await getData("generation");

    if (data !== null) {
      const generationData = await GenerationRanges.filter(
        currentGeneration => {
          return currentGeneration.generation !== data;
        }
      );

      if (generationData !== undefined) {
        const { generation, endRange, startRange } = generationData;

        this.setState({ generation, endRange, startRange });
      }
    } else {
      await setData("generation", "All");
    }
  };

  componentDidMount() {
    this.checkAsyncStorage();
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
