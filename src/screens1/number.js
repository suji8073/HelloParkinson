import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const number = ({ id }) => {
  console.log(id % 5);
  const dateToStr = () => {
    if (id === 5) return "5";
    else if (id === 10) return "10";
    else if (id === 15) return "15";
    else if (id === 20) return "20";
    else if (id === 25) return "25";
    else if (id === 30) return "30";
  };
  return (
    //  전체 뷰
    <View
      style={
        id % 5 === 0
          ? id !== 0
            ? styles.textView
            : styles.textView1
          : styles.textView1
      }
    >
      <Text style={id % 5 === 0 ? styles.text11 : styles.text1}>
        {dateToStr()}
      </Text>
    </View>
  );
};

export default number;
const styles = StyleSheet.create({
  textView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveScreenWidth(3),
    marginRight: responsiveScreenWidth(0.5),
    marginLeft: responsiveScreenWidth(0.5),
    marginBottom: responsiveScreenWidth(1),
  },

  textView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: responsiveScreenWidth(1.5),
    marginRight: responsiveScreenWidth(0.5),
    marginLeft: responsiveScreenWidth(0.5),
    marginBottom: responsiveScreenWidth(1),
  },
  text11: {
    fontSize: responsiveScreenFontSize(0.9),
    color: "#484848",
  },

  text1: {
    fontSize: responsiveScreenFontSize(0.9),
    color: "#484848",
  },
});
