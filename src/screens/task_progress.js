import React from "react";
import { StyleSheet, View, Text } from "react-native";

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
    fontSize: 17,
    marginBottom: "4%",
    color: "#484848",
  },
});
