import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default class task2 extends Component {
  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.birthday).substring(0, 4);
    return today_year - birth_year + 1;
  };

  age_change = () => {
    return this.props.sex === "F" ? "여" : "남";
  };

  render() {
    return (
      <View style={styles.Container}>
        <Ionicons name="person-circle-sharp" size={45} color="lightblue" />
        <View style={styles.textgroup}>
          <Text style={styles.titleText}> {this.props.user} </Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}>{this.dateToStr()}</Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}> {this.age_change()} </Text>
        </View>
        <View style={styles.margin}></View>
        <AntDesign name="right" size={24} color="#808080" />
      </View>
    );
  }
}
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
    fontSize: responsiveScreenFontSize(2),
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.64),
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
