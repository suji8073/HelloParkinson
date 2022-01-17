import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Dimensions } from "react-native";
import Task from "./task_record_day";
import Task1 from "./task_week";
import Taskm from "../screens1/task_week_m";

import { WithLocalSvg } from "react-native-svg";

import page_here from "../icon/page_here.svg";
import page_no from "../icon/page_no.svg";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import MonthPicker from "react-native-month-year-picker";

const data = [
  { date: "20220111", progress: 80 },
  { date: "20220112", progress: 90 },
  { date: "20220113", progress: 80 },
  { date: "20220114", progress: 90 },
  { date: "20220115", progress: 90 },
  { date: "20220116", progress: 90 },
  { date: "20220117", progress: 60 },
];

const data1 = [
  { date: "20220101", progress: 30 },
  { date: "20220102", progress: 40 },
  { date: "20220103", progress: 50 },
  { date: "20220104", progress: 30 },
  { date: "20220105", progress: 50 },
  { date: "20220106", progress: 60 },
  { date: "20220107", progress: 10 },
  { date: "20220108", progress: 70 },
  { date: "20220109", progress: 90 },
  { date: "20220110", progress: 80 },
  { date: "20220111", progress: 80 },
  { date: "20220112", progress: 90 },
  { date: "20220113", progress: 80 },
  { date: "20220114", progress: 90 },
  { date: "20220115", progress: 90 },
  { date: "20220116", progress: 90 },
  { date: "20220117", progress: 60 },
];

var sum_progress = 0;
var sum_progress_m = 0;
const { width, height } = Dimensions.get("screen");

export default class patient_record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_progress: 0,
      data: [],
      first_date: "",
      late_date: "",
      sum_p: 0,
      page_l: true,
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      date: new Date(),
      show: false,
      setShow: false,
    };
  }

  handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.x < 130) {
      console.log("1");
      this.setState({ page_l: true });
    } else if (e.nativeEvent.contentOffset.x > 130) {
      console.log("2");
      this.setState({ page_l: false });
    }
    console.log("현재 : " + this.state.page_l);
  };

  componentDidMount() {
    this.setState({ sum_p: 0, sum_m: 0 });
    data.map((x) => {
      sum_progress += x.progress;
      this.setState({ sum_p: sum_progress / 7 });
    });

    data.filter((x, y) => {
      if (y === 0) this.setState({ first_date: x.date });
      if (y === 6) this.setState({ late_date: x.date });
    });

    data1.map((x) => {
      sum_progress_m += x.progress;
      this.setState({ sum_m: sum_progress_m / data1.length });
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
      */
    }
    // 일별, 카테고리별 진도율
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

  showDatePicker = () => {
    this.setState({ setDatePickerVisibility: true, isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({
      setDatePickerVisibility: false,
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.dateToStr(date);
    this.hideDatePicker();
  };

  dateToStr = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var daycount = date.getDay();

    var today =
      year +
      ("00" + month.toString()).slice(-2) +
      ("00" + day.toString()).slice(-2);

    this.setState({
      first_date: parseInt(today) - parseInt(daycount),
      late_date: parseInt(today) - parseInt(daycount) + 6,
    });
  };

  onValueChange = () => {
    var newDate = new Date();
    const selectedDate = newDate || date;
    this.setState({ setDate: selectedDate, setShow: false });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 기록</Text>
          <View style={styles.margin}></View>
        </View>

        <View style={styles.mainView}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "space-between",
            }}
          >
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              mode="date"
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
            />
            <ScrollView
              horizontal
              contentContainerStyle={{ width: width * 2 }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              onScroll={this.handleScroll}
            >
              <View style={styles.secondView}>
                <View style={styles.textview}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={this.showDatePicker}
                  >
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
                  </TouchableOpacity>
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
                  <TouchableOpacity
                    onPress={() => this.setState({ setShow: true })}
                  >
                    <Text style={styles.text1}>
                      {String(this.state.first_date).substring(0, 4) +
                        "년 " +
                        String(this.state.first_date).substring(4, 6) +
                        "월" }
                    </Text>
                  </TouchableOpacity>
                  {this.state.show === true && (
                    <MonthPicker
                      onChange={this.onValueChange}
                      value={this.state.date}
                      minimumDate={new Date()}
                      maximumDate={new Date(2025, 5)}
                      locale="ko"
                    />
                  )}
                  <Text style={styles.text2}>
                    월 평균 {this.state.sum_p.toFixed(1)}%
                  </Text>
                </View>

                <SafeAreaView style={{ flex: 2, width: "100%" }}>
                  <FlatList
                    keyExtractor={(item, index) => index}
                    data={data1}
                    renderItem={({ item, index }) => {
                      return (
                        <Taskm
                          id={index}
                          put_date={item.date}
                          progress={item.progress}
                        ></Taskm>
                      );
                    }}
                    horizontal={true}
                  ></FlatList>
                </SafeAreaView>
              </View>
            </ScrollView>
            <View style={styles.page_location}>
              <View style={styles.p_margin}></View>
              <WithLocalSvg
                width={10}
                height={10}
                asset={this.state.page_l == true ? page_here : page_no}
              />
              <View style={styles.pp_margin}></View>
              <WithLocalSvg
                width={10}
                height={10}
                asset={this.state.page_l == false ? page_here : page_no}
              />
              <View style={styles.p_margin}></View>
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

  page_location: { flexDirection: "row" },
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
  p_margin: {
    flex: 5,
  },
  pp_margin: {
    flex: 0.5,
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
    marginBottom: 180,
  },
  secondView: {
    marginTop: "3%",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: "1%",
    paddingLeft: "2%",
    paddingRight: "2%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: width - 40,
  },
  threeView: {
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    padding: "5%",
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
