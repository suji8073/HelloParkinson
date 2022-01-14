import React, { Component } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import Task from "./task_record_day";
import Task1 from "./task_week";

const data = [
  { date: "20220108", progress: 80 },
  { date: "20220109", progress: 90 },
  { date: "20220110", progress: 80 },
  { date: "20220111", progress: 90 },
  { date: "20220112", progress: 90 },
  { date: "20220113", progress: 90 },
  { date: "20220114", progress: 60 },
];

var sum_progress = 0;

export default class patient_record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_progress: 0,
      data: [],
      first_date: "",
      late_date: "",
      sum_p: 0,
    };
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };

  componentDidMount() {
    data.map((x) => {
      sum_progress += x.progress;
      this.setState({ sum_p: sum_progress / 7 });
    });

    data.filter((x, y) => {
      if (y === 0) this.setState({ first_date: x.date });
      if (y === 6) this.setState({ late_date: x.date });
    });

    // 일별 총 진도율
    {
      /*
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
          progress: json.info.progress,
          mon: json.info.mon * 0.8,
          tus: json.info.tus * 0.8,
          wed: json.info.wed * 0.8,
          thr: json.info.thr * 0.8,
          fri: json.info.fri * 0.8,
          sun: json.info.sun * 0.8,
        });
      });
    // 일별, 카테고리별 진도율
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
    */
    }
  }

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 기록{data.date}</Text>
          <View style={styles.margin}></View>
        </View>

        <View style={styles.mainView}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.secondView}>
              <View style={styles.textview}>
                <Text style={styles.text1}>
                  {String(this.state.first_date).substring(0, 4) +
                    "년 " +
                    String(this.state.first_date).substring(4, 6) +
                    "월 " +
                    +String(this.state.first_date).substring(6, 8) +
                    "일 ~ " +
                    String(this.state.late_date).substring(4, 6) +
                    "월 " +
                    +String(this.state.late_date).substring(6, 8) +
                    "일"}
                </Text>
                <Text style={styles.text2}>
                  주 평균 {this.state.sum_p.toFixed(1)}%
                </Text>
              </View>

              <SafeAreaView style={{ flex: 2, width: "100%" }}>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={data}
                  renderItem={({ item, index }) => {
                    return (
                      <Task1
                        id={index}
                        put_date={item.date}
                        progress={item.progress}
                      ></Task1>
                    );
                  }}
                  horizontal={true}
                ></FlatList>
              </SafeAreaView>
            </View>

            <View style={styles.secondView}>
              <View style={styles.textview}>
                <Text style={styles.text1}>
                  {String(this.state.first_date).substring(0, 4) +
                    "년 " +
                    String(this.state.first_date).substring(4, 6) +
                    "월 " +
                    +String(this.state.first_date).substring(6, 8) +
                    "일 ~ " +
                    String(this.state.late_date).substring(4, 6) +
                    "월 " +
                    +String(this.state.late_date).substring(6, 8) +
                    "일"}
                </Text>
                <Text style={styles.text2}>
                  주 평균 {this.state.sum_p.toFixed(1)}%
                </Text>
              </View>

              <SafeAreaView style={{ flex: 2, width: "100%" }}>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={data}
                  renderItem={({ item, index }) => {
                    return (
                      <Task1
                        id={index}
                        put_date={item.date}
                        progress={item.progress}
                      ></Task1>
                    );
                  }}
                  horizontal={true}
                ></FlatList>
              </SafeAreaView>
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
    marginTop: "3%",
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
    height: 200,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  s_view: {},
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
  },
  text2: {
    alignItems: "flex-start",
    fontSize: 21,
    color: "#000000",
    fontWeight: "bold",
  },
  textview: {
    flex: 1,
    marginTop: 10,
    marginBottom: 3,
    justifyContent: "center",
  },
  oneview: {
    flex: 1,
    marginBottom: 5,
  },
});
