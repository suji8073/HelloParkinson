import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

function Task({ ename }) {
  return (
    <View>
      <Text style={styles.movetext}> {ename} </Text>
    </View>
  );
}

export default Task;

const styles = StyleSheet.create({
  movetext: {
    fontSize: responsiveScreenFontSize(2),
    marginBottom: "4%",
    color: "#484848",
  },
});
