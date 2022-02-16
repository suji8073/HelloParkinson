import React, { Component } from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const task_week1 = ({ id, put_date, progress }) => {
  return (
    //  전체 뷰
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: responsiveScreenWidth(1.1),
        marginRight: 3,
        marginLeft: 3,
        marginBottom: 2,
      }}
    >
      <SafeAreaView style={{ flex: 2, width: "100%" }}>
        <View style={styles.graphView}>
          <View
            style={progress <= 40 ? styles.chart1 : styles.chart}
            height={progress * 100}
          ></View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default task_week1;
const styles = StyleSheet.create({
  graphView: {
    flexDirection: "row",
    flex: 2.6,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  textView: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    flex: 1,
    backgroundColor: "#5CB405",
  },
  chart1: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },

  text11: {
    fontSize: responsiveScreenFontSize(1.12),
    width: responsiveScreenWidth(2),
    color: "#484848",
  },
});
