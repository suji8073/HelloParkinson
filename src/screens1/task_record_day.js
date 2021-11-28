import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default class task_patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CAT1: 0,
      CAT2: 0,
      CAT3: 0,
      CAT4: 0,
      CAT5: 0,
      R_date: "",
      data: [],
    };
  }

  componentDidMount() {
    console.log(this.props.text);
    fetch("http://152.70.233.113/chamuser/day/suji", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          CAT1: json.CAT1,
          CAT2: json.CAT2,
          CAT3: json.CAT3,
          CAT4: json.CAT4,
          CAT5: json.CAT5,
          data: json,
          R_date: json.R_date,
        });
        console.log(this.state.data);
      });
  }

  render() {
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
        <Text style={styles.text1}>{this.state.R_date}</Text>

        <View style={styles.graphView}>
          <View style={styles.numView}>
            <View style={styles.num3}></View>
            <Text style={styles.num2}>75</Text>
            <Text style={styles.num2}>25</Text>
            <Text style={styles.num2}>40</Text>
            <Text style={styles.num2}>90</Text>
            <Text style={styles.num2}>50</Text>
          </View>

          <LineChart
            style={styles.chart}
            data={this.state.data}
            width={330}
            height={100}
            chartConfig={{
              backgroundColor: "#FFFFFF",
              backgroundGradientFrom: "#FFFFFF",
              backgroundGradientTo: "#FFFFFF",
              decimalPlaces: 0,

              color: (opacity = 1) => `rgba(198, 198, 198, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(72, 72, 72, ${opacity})`,
              propsForDots: {
                r: "4",
              },
            }}
          />

          <View style={styles.textView}>
            <View style={styles.text3}></View>
            <Text style={styles.text2}>신장</Text>
            <Text style={styles.text2}>근육</Text>
            <Text style={styles.text2}>구강{"\n"}발성</Text>
            <Text style={styles.text2}>균형{"\n"}협응</Text>
            <Text style={styles.text2}>유산소</Text>
            <View style={styles.text4}></View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    fontSize: 17,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
    lineHeight: 20,
  },
  text3: {
    flex: 1.3,
  },
  text4: {
    flex: 0.3,
  },
  graphView: {
    flex: 3,
    marginBottom: "5%",
    width: "100%",
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
    width: "100%",
    marginBottom: "5%",
  },
  numView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    marginTop: "8%",
  },
  num2: {
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
    flex: 1.8,
  },
  num3: {
    flex: 1.4,
  },
});
