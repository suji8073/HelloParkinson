import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Task({ user, age, sex }) {
  return (
    <View style={styles.Container}>
      <Ionicons name="person-circle-sharp" size={45} color="lightblue" />
      <View style={styles.textgroup}>
        <Text style={styles.titleText}> {user}</Text>
        <Text style={styles.titleText}> / </Text>
        <Text style={styles.titleText}> {age}</Text>
        <Text style={styles.titleText}> / </Text>
        <Text style={styles.titleText}> {sex}</Text>
      </View>
      <View style={styles.margin}></View>
      <AntDesign name="right" size={24} color="#808080" />
    </View>
  );
}

Task.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

export default Task;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    height: 90,
    flexDirection: "row",
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: 15,
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: 14,
    alignItems: "center",
    color: "#747474",
    justifyContent: "center",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
