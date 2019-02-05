import { createStackNavigator } from "react-navigation";
import DisplayScreen from "../screens/Display";

const ApplicationStack = createStackNavigator(
  {
    Display: DisplayScreen
  },
  {
    initialRouteName: "Display",

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

export default ApplicationStack;
