import React, { Component } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import Task from "./task_record_day";

export default class patient_record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User_id: "sitl7890",
      id: 0,
      progress: 0,
      mon: 0,
      tus: 0,
      wed: 0,
      thr: 0,
      fri: 0,
      sat: 0,
      sun: 0,
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://152.70.233.113/chamuser/uid/" +
        this.props.route.params.paramsName,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          id: json.info.id,
          progress: json.info.progress,
          mon: json.info.mon * 0.8,
          tus: json.info.tus * 0.8,
          wed: json.info.wed * 0.8,
          thr: json.info.thr * 0.8,
          fri: json.info.fri * 0.8,
          sat: json.info.sat * 0.8,
          sun: json.info.sun * 0.8,
        });
      });

    console.log(this.props.text);
    fetch(
      "http://152.70.233.113/chamuser/day/" +
        this.props.route.params.paramsName,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
  }

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 기록{this.state.id}</Text>
          <View style={styles.margin}></View>
        </View>

        <View style={styles.mainView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.secondView}>
              <View style={styles.textview}>
                <Text style={styles.text1}>2021년 11월 25일 ~ 11월 26일</Text>
                <Text style={styles.text2}>주 평균 {this.state.progress}%</Text>
              </View>

              <View style={styles.graphview}>
                <View style={styles.graphView}>
                  <View style={styles.margin1}></View>
                  <View style={styles.chart} height={this.state.sun}></View>
                  <View style={styles.margin3}></View>
                  <View style={styles.chart} height={this.state.tus}></View>
                  <View style={styles.margin1}></View>
                  <View style={styles.chart} height={this.state.mon}></View>
                  <View style={styles.margin3}></View>
                  <View style={styles.chart} height={this.state.wed}></View>
                  <View style={styles.margin3}></View>
                  <View style={styles.chart} height={this.state.thr}></View>
                  <View style={styles.margin3}></View>
                  <View style={styles.chart} height={this.state.fri}></View>
                  <View style={styles.margin3}></View>
                  <View style={styles.chart} height={this.state.sat}></View>
                  <View style={styles.margin3}></View>
                </View>

                <View style={styles.textView}>
                  <View style={styles.margin2}></View>
                  <Text style={styles.text11}>일</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>월</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>화</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>수</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>목</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>금</Text>
                  <View style={styles.margin3}></View>
                  <Text style={styles.text11}>토</Text>
                  <View style={styles.margin2}></View>
                </View>
              </View>
            </View>

            <View style={styles.threeView}>
              <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={this.state.data}
                  renderItem={({ item }) => {
                    return (
                      <Task
                        CAT1={item.CAT1}
                        CAT2={item.CAT2}
                        CAT3={item.CAT3}
                        CAT4={item.CAT4}
                        CAT5={item.CAT5}
                        R_date={item.R_date}
                      ></Task>
                    );
                  }}
                />
              </SafeAreaView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
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

  text11: {
    fontSize: 14,
    color: "#484848",
    justifyContent: "center",
    alignItems: "center",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "10%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  mainView: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 180,
  },
  secondView: {
    margin: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "90%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  threeView: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    padding: "5%",
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  moveView: {
    backgroundColor: "#FFFFFF",
    height: 90,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "3%",
    marginBottom: "3%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  textview: {
    flex: 1,
    marginTop: "5%",
    marginBottom: "3%",
    justifyContent: "center",
  },
  graphview: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    alignItems: "flex-start",
    marginTop: 8,
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
