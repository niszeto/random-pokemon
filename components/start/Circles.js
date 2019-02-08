import React from "react";
import { StyleSheet, View } from "react-native";

const Circles = props => {
  return (
    <View style={styles.container}>
      <View style={styles.mainOuterCircle}>
        <View style={styles.mainInnerCircle} />
      </View>

      <View style={styles.redCircle} />

      <View style={styles.yellowCircle} />

      <View style={styles.greenCircle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },

  mainOuterCircle: {
    height: 100,
    width: 100,
    marginTop: 5,
    marginLeft: 15,
    marginBottom: 5,
    marginRight: 15,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "#BEDACB",
    justifyContent: "center",
    alignItems: "center"
  },

  mainInnerCircle: {
    height: 80,
    width: 80,
    margin: 5,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#01FFFF"
  },

  redCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#FE0002",
    margin: 5
  },

  yellowCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#FEF102",
    margin: 5
  },

  greenCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#00A652",
    margin: 5
  }
});

export default Circles;
