import { AsyncStorage } from "react-native";

const getGenerationInformation = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return value;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getGenerationInformation;
