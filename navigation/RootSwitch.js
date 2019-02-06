import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../screens/Start";
import RootStack from "./RootStack";

const RootSwitch = createSwitchNavigator(
  {
    Start: StartScreen,
    Root: RootStack
  },
  {
    initialRouteName: "Start"
  }
);

export default RootSwitch;
