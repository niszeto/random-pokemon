import { createSwitchNavigator } from "react-navigation";

import StartScreen from "../screens/Start";
import ApplicationStack from "../navigation/ApplicationStack";

const RootSwitch = createSwitchNavigator(
  {
    Start: StartScreen,
    Application: ApplicationStack
  },
  {
    initialRouteName: "Start"
  }
);

export default RootSwitch;
