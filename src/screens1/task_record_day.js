import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

function* yLabel() {
  yield* ["0%", "", "50%", "", "100%"];
}

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export default class task_patient extends Component {
  render() {
    const yLabelIterator = yLabel();
    return (
      //  전체 뷰
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
          height: responsiveScreenHeight(29.3),
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Text style={styles.text1}>
          {String(this.props.R_date).substring(0, 2)}월&nbsp;
          {String(this.props.R_date).substring(2, 4)}일
        </Text>

        <View style={styles.graphView}>
          <View style={styles.numView}>
            <Text style={styles.num2}>{this.props.CAT1.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT2.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT3.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT4.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT5.toFixed(0) + "%"}</Text>
          </View>

          <LineChart
            style={styles.chart}
            data={{
              datasets: [
                {
                  data: [
                    this.props.CAT1,
                    this.props.CAT2,
                    this.props.CAT3,
                    this.props.CAT4,
                    this.props.CAT5,
                  ],
                  color: (opacity = 0) => `rgba(101, 203, 0, ${opacity})`, // optional
                  strokeWidth: 1.5,
                },
                {
                  data: [0], // min

                  color: (opacity = 0) => `rgba(255, 255, 255, 0)`, // optional
                },
                {
                  data: [100], // max
                  color: (opacity = 0) => `rgba(255, 255, 255, 1.0)`, // optional
                },
              ],
            }}
            width={responsiveScreenWidth(90)}
            height={responsiveScreenHeight(13.1)}
            formatYLabel={() => [yLabelIterator.next().value]}
            chartConfig={{
              backgroundColor: "#FFFFFF",
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(198, 198, 198, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(198, 198, 198, ${opacity})`,
              propsForDots: {
                r: "4",
              },
            }}
          />

          <View style={styles.textView}>
            <Text style={styles.text2}>신장</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>근육</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>구강{"\n"}발성</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>균형{"\n"}협응</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>유산소</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2),
    marginBottom: "3%",
    marginLeft: "3%",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
    paddingLeft: "3%",
  },
  text2: {
    fontSize: responsiveScreenFontSize(1.52),
    color: "#484848",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: responsiveScreenFontSize(1.8),
  },
  text3: {
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
  },

  graphView: {
    flex: 3,
    marginBottom: "5%",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  chart: {
    width: "100%",
  },
  textView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "1.8%",
    marginLeft: "15%",
    marginRight: "10%",
  },
  numView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: "17%",
    marginRight: "10%",
    marginBottom: "1%",
  },
  num1: {
    width: "16%",
  },
  num2: {
    fontSize: responsiveScreenFontSize(1.52),
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
});
