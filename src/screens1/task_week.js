import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const task_week = ({ id, put_date, progress }) => {
  const dateToStr = (date) => {
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
    //  전체 뷰
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: 28,
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 2,
      }}
    >
      <View style={styles.graphView}>
        <View
          style={id === 6 ? styles.chart1 : styles.chart}
          height={progress * 100}
        ></View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text11}>{dateToStr(new Date())}</Text>
      </View>
    </View>
  );
};

export default task_week;
const styles = StyleSheet.create({
  graphView: {
    flexDirection: "row",
    flex: 3,
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
    backgroundColor: "#316200",
  },

  text11: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#484848",
  },
});
