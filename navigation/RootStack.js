import { createStackNavigator } from "react-navigation";

import DisplayStack from "./DisplayStack";
import SettingsStack from "./SettingsStack";

const ModalStack = createStackNavigator(
  {
    Display: DisplayStack,
    Settings: SettingsStack
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default ModalStack;
