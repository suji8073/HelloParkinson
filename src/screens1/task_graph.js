import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data1 = "80%";
const data2 = "60%";
const data3 = "30%";
const data4 = "50%";
const data5 = "10%";
const data6 = "25%";
const data7 = "30%";

const task_graph = ({}) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <View style={styles.graphView}>
        <View style={styles.margin1}></View>
        <View style={styles.chart} height={data1}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data2}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data3}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data4}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data5}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data6}></View>
        <View style={styles.margin}></View>
        <View style={styles.chart} height={data7}></View>
        <View style={styles.margin1}></View>
      </View>

      <View style={styles.textView}>
        <View style={styles.margin2}></View>
        <Text style={styles.text1}>일</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>월</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>화</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>수</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>목</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>금</Text>
        <View style={styles.margin}></View>
        <Text style={styles.text1}>토</Text>
        <View style={styles.margin2}></View>
      </View>
    </View>
  );
};

export default task_graph;

const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  graphView: {
    flexDirection: "row",
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  margin: {
    flex: 0.5,
  },
  margin1: {
    flex: 0.3,
  },
  margin2: {
    flex: 0.3,
  },
  textView: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    flex: 0.8,
    backgroundColor: "#5CB405",
  },

  text1: {
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
});
