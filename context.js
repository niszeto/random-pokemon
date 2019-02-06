import React from "react";

export const Context = React.createContext();

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_GENERATION":
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
      endRange: 5,
      // endRange: 803,
      dispatch: action => this.setState(state => reducer(state, action))
    };
  }

  // check async storage to see if theres a saved file
  // if its there grab the data and replace the default
  componentDidMount() {}

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
