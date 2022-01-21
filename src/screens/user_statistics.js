import React, { Component } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import Task from "../screens1/task_record_day";
import Task1 from "../screens1/task_week1";
import Taskm from "../screens1/task_week1_m";
const year = 2022 + 1;
import Context from "../Context/context";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

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

export default class user_statistics extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      all_progress: 0,
      data: [],
      first_date: "",
      late_date: "",
      sum_p: 0,
      sum_m: 0,
      page_l: true,
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
      progress: 0,
      data1: [],
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
    this.function1();
    this.function2();
    data.map((x) => {
      sum_progress += x.progress;
      this.setState({ sum_p: sum_progress / 7 });
    });

    data1.map((x) => {
      sum_progress_m += x.progress;
      this.setState({ sum_m: sum_progress_m / data1.length });
    });

    data.filter((x, y) => {
      if (y === 0) this.setState({ first_date: x.date });
      if (y === 6) this.setState({ late_date: x.date });
    });

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

  function1 = () => {
    fetch(
      "http://152.70.233.113/chamuser/id/" + this.props.route.params.paramName1,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          birth: json.info.birth,
          gender: json.info.gender,
          memo: json.info.memo,
          team: json.info.team,
          name: json.info.name,
          UID: json.info.UID,
          progress: json.info.progress,
        });
      });
  };

  function2 = () => {
    fetch(
      "http://152.70.233.113/chamuser/day/" +
        this.props.route.params.paramName2,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
  };

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
          <View style={styles.margin}>
            <AntDesign
              name="left"
              size={24}
              color="#808080"
              onPress={() => {
                this.props.navigation.pop();
              }}
            />
          </View>
          <Text style={styles.titleText}>
            '{this.state.name}'님 의 운동 통계
          </Text>
          <View style={styles.margin}></View>
        </View>

        <View style={styles.mainView}>
          <ScrollView
            contentContainerStyle={{
              justifyContent: "space-between",
            }}
          >
            <View style={styles.firstView}>
              <Text style={styles.user_name}>{this.state.name}</Text>
              <Text style={styles.user_age}>
                {" "}
                / {year - parseInt(this.state.birth / 10000)}세
              </Text>
              <Text style={styles.user_sex}> / {this.state.gender}</Text>
              <View style={styles.margin}></View>
            </View>

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
                  <Text style={styles.text2}>{"주 평균" + " "}</Text>
                  <Text style={styles.text22}>
                    {this.state.sum_p.toFixed(1)}%
                  </Text>
                  <View style={styles.margin}></View>

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
                  <Text style={styles.text2}>{"월 평균" + " "}</Text>
                  <Text style={styles.text22}>
                    {this.state.sum_m.toFixed(1)}%
                  </Text>
                  <View style={styles.margin}></View>
                  <TouchableOpacity
                    onPress={() => this.setState({ setShow: true })}
                  >
                    <Text style={styles.text1}>
                      {"~ " +
                        String(this.state.late_date).substring(0, 4) +
                        "년 " +
                        String(this.state.late_date).substring(4, 6) +
                        "월"}
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

  user_name: {
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#484848",
    fontSize: 18,
    fontWeight: "bold",
  },

  user_age: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },

  user_sex: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },

  firstView: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 10,
    backgroundColor: "#F8F8F8",
  },
  mainView: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 70,
  },
  secondView: {
    marginTop: "2%",
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
    fontSize: 13,
    color: "#000000",
    borderBottomWidth: 0.5,
    borderColor: "#0F9D58",
  },
  text2: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
  },
  text22: {
    fontSize: 19,
    color: "#000000",
    fontWeight: "bold",
  },
  textview: {
    marginTop: 10,
    marginBottom: 3,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  oneview: {
    flex: 1,
    marginBottom: 5,
  },
});
