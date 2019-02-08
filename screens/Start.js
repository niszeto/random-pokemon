import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import questionMark from "../assets/question-mark.png";

const Start = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>{/* circles */}</View>

      <View style={styles.mainContentContainer}>
        <View style={styles.screenContainer}>
          <Image source={questionMark} style={styles.imageStyle} />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => props.navigation.navigate("Display")}
        >
          <View style={styles.buttonTextContainer}>
            <Text style={styles.textStyle}>Catch Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF373D"
  },

  headerContainer: {
    flex: 1,
    width: "100%"
  },

  mainContentContainer: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  screenContainer: {
    height: "95%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 10,
    borderColor: "black",
    backgroundColor: "#FFFFFF"
  },

  imageStyle: {
    height: 350,
    width: 250,
    resizeMode: "contain"
  },

  footerContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F8F3",
    height: "80%",
    width: "90%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black"
  },

  buttonTextContainer: {
    backgroundColor: "#01FFFF",
    justifyContent: "center",
    alignItems: "center",
    height: "85%",
    width: "95%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black"
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

export default Start;
