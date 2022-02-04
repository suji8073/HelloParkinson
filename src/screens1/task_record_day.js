import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

function* yLabel() {
  yield* ["0%", "", "50%", "", "100%"];
}

export default class task_patient extends Component {
  render() {
    const yLabelIterator = yLabel();
    return (
      //  전체 뷰
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "column",
          height: 200,
          width: 300,
          justifyContent: "center",
        }}
      >
        <Text style={styles.text1}>
          {String(this.props.R_date).substring(0, 2)}월&nbsp;
          {String(this.props.R_date).substring(2, 4)}일
        </Text>

        <View style={styles.graphView}>
          <View style={styles.numView}>
            <View style={styles.num3}></View>
            <Text style={styles.num2}>{this.props.CAT1.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT2.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT3.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT4.toFixed(0) + "%"}</Text>
            <View style={styles.num1}></View>
            <Text style={styles.num2}>{this.props.CAT5.toFixed(0) + "%"}</Text>
            <View style={styles.num4}></View>
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
            width={350}
            height={100}
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
            <View style={styles.text4}></View>
            <Text style={styles.text2}>신장</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>근육</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>구강{"\n"}발성</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>균형{"\n"}협응</Text>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>유산소</Text>
            <View style={styles.text5}></View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    marginBottom: 5,
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 14,
    color: "#484848",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 20,
  },
  text3: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text4: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text5: {
    width: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  graphView: {
    flex: 3,
    marginBottom: "5%",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  chart: {
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "5%",
  },
  numView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: "8%",
  },
  num1: {
    width: 40,
  },
  num2: {
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
  num3: {
    width: 30,
  },
  num4: {
    width: 15,
  },
});
