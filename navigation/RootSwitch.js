import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../screens/Start";
import DisplayScreen from "../screens/Display";

const RootSwitch = createSwitchNavigator(
  {
    Start: StartScreen,
    Display: DisplayScreen
  },
  {
    initialRouteName: "Start"
  }
);

export default RootSwitch;
