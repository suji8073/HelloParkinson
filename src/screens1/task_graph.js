import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class task_graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mon: 0,
      tus: 0,
      wed: 0,
      thr: 0,
      fri: 0,
      sat: 0,
      sun: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.text);
    fetch("http://152.70.233.113/chamuser/id/" + this.props.text, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          mon: json.info.mon * 0.8,
          tus: json.info.tus * 0.8,
          wed: json.info.wed * 0.8,
          thr: json.info.thr * 0.8,
          fri: json.info.fri * 0.8,
          sun: json.info.sun * 0.8,
        });
      });
  }

  render() {
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
          <View style={styles.chart} height={this.state.sun}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart} height={this.state.tus}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart} height={this.state.mon}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart} height={this.state.wed}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart} height={this.state.thr}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart1} height={this.state.fri}></View>
          <View style={styles.margin3}></View>
          <View style={styles.chart} height={this.state.sat}></View>
          <View style={styles.margin1}></View>
        </View>

        <View style={styles.textView}>
          <View style={styles.margin2}></View>
          <Text style={styles.text11}>일</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>월</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>화</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>수</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>목</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>금</Text>
          <View style={styles.margin4}></View>
          <Text style={styles.text11}>토</Text>
          <View style={styles.margin5}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  graphView: {
    flexDirection: "row",
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  margin3: {
    flex: 0.5,
  },
  margin1: {
    flex: 0.3,
  },

  margin2: {
    flex: 0.09,
  },
  margin4: {
    flex: 0.19,
  },
  margin5: {
    flex: 0.11,
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
  chart1: {
    flex: 0.8,
    backgroundColor: "#316200",
  },

  text11: {
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
});
