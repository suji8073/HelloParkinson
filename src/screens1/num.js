import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default class num extends Component {
  render(){
  return (
    <Text>안녕</Text>
    );
  }
}

export default num;
const styles = StyleSheet.create({
  mainview_1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveScreenWidth(5.4),
    marginRight: responsiveScreenWidth(3.6),
    marginLeft: responsiveScreenWidth(4),
  },

  mainview: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveScreenWidth(5.4),
    marginRight: responsiveScreenWidth(3.6),
    marginLeft: responsiveScreenWidth(1.9),
  },

  mainview_end: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveScreenWidth(5.4),
    marginLeft: responsiveScreenWidth(1.9),
  },

  graphView: {
    flexDirection: "row",
    height: responsiveScreenHeight(9),
    alignItems: "flex-end",
    justifyContent: "center",
  },

  textView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textView_bottom: {
    marginTop: responsiveScreenHeight(1),
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  chart: {
    flex: 1,
    backgroundColor: "#5CB405",
    borderWidth: 1,
  },
  chart1: {
    flex: 1,
    backgroundColor: "#316200",
  },

  text11: {
    fontSize: responsiveScreenFontSize(1.52),
    fontWeight: "bold",
    color: "#484848",
  },

  text1: {
    fontSize: responsiveScreenFontSize(1.64),
    fontWeight: "bold",
    color: "#000000",
  },
  text1_: {
    fontSize: responsiveScreenFontSize(1.52),
    fontWeight: "bold",
    color: "#565656",
  },

  text22: {
    fontSize: responsiveScreenFontSize(1.4),
    fontWeight: "bold",
    color: "#000000",
  },

  text2_: {
    fontSize: responsiveScreenFontSize(1.28),
    fontWeight: "bold",
    color: "#565656",
  },
});
