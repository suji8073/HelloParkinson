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
        <Ionicons
          name="person-circle-sharp"
          style={{ fontSize: responsiveScreenFontSize(6) }}
          color="lightblue"
        />
        <View style={styles.textgroup}>
          <Text style={styles.titleText}> {this.props.user} </Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}>{this.dateToStr()}</Text>
          <Text style={styles.titleText}> / </Text>
          <Text style={styles.titleText}> {this.age_change()} </Text>
        </View>
        <View style={styles.margin}></View>
        <View style={{ marginRight: responsiveScreenWidth(3.6) }}>
          <AntDesign
            name="right"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: responsiveScreenWidth(4.7),
    marginRight: responsiveScreenWidth(4.7),
    marginBottom: responsiveScreenHeight(2),
    height: responsiveScreenHeight(11),
    borderRadius: 10,
    flexDirection: "row",
    paddingLeft: responsiveScreenWidth(4),
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: responsiveScreenWidth(2.8),
    justifyContent: "flex-start",
    flexDirection: "row",
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
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
