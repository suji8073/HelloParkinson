import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const task_week = ({ id, put_date, progress }) => {
  const dateToStr = (put_date) => {
    var date = new Date(put_date);
    var week = new Array("일", "월", "화", "수", "목", "금", "토");

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var today =
      year +
      ("00" + month.toString()).slice(-2) +
      ("00" + day.toString()).slice(-2);

    var change_date =
      String(put_date).substring(0, 4) +
      String(put_date).substring(5, 7) +
      String(put_date).substring(8, 10);

    var daycount = date.getDay() - (parseInt(today) - parseInt(change_date));

    if (daycount < 0) {
      return week[daycount + 7];
    } else {
      return week[daycount];
    }
  };
  return (
    <View style={id != 6 ? styles.mainview : styles.mainview_end}>
      <View style={styles.graphView}>
        <View
          style={id === 6 ? styles.chart1 : styles.chart}
          height={progress * 100}
        ></View>
      </View>
      <View style={styles.textView}>
        <Text style={id === 6 ? styles.text22 : styles.text2_}>
          {put_date.substring(8, 10)}
        </Text>
        <Text style={id === 6 ? styles.text11 : styles.text1_}>
          {dateToStr(put_date)}
        </Text>
      </View>
    </View>
  );
};

export default task_week;
const styles = StyleSheet.create({
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
    height: responsiveScreenHeight(9.5),
    alignItems: "flex-end",
    justifyContent: "center",
  },

  textView: {
    marginTop: responsiveScreenHeight(1.8),
    flexDirection: "column",
    alignItems: "center",
  },
  chart: {
    flex: 1,
    backgroundColor: "#5CB405",
  },
  chart1: {
    flex: 1,
    backgroundColor: "#316200",
  },

  text11: {
    marginTop: responsiveScreenHeight(0.1),
    fontSize: responsiveScreenFontSize(1.52),
    fontWeight: "bold",
    color: "#000000",
  },
  text1_: {
    marginTop: responsiveScreenHeight(0.1),
    fontSize: responsiveScreenFontSize(1.52),
    fontWeight: "bold",
    color: "#565656",
  },

  text22: {
    fontSize: responsiveScreenFontSize(1.28),
    fontWeight: "bold",
    color: "#000000",
  },

  text2_: {
    fontSize: responsiveScreenFontSize(1.28),
    fontWeight: "bold",
    color: "#565656",
  },
});
