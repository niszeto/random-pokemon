import { createStackNavigator } from "react-navigation";
import SettingsScreen from "../screens/Settings";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  {
    initialRouteName: "Settings",

    defaultNavigationOptions: {
      title: "Pokemon",

      headerStyle: {
        backgroundColor: "#F8EE5F"
      },

      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
      },

      headerTintColor: "white"
    }
  }
);

export default SettingsStack;
