import React, { Component } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Dimensions } from "react-native";
import Task from "./task_record_day";
import Task1 from "./task_week";
import Taskm from "../screens1/task_week_m";
import { MaterialIcons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

import page_here from "../icon/page_here.svg";
import page_no from "../icon/page_no.svg";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

var sum_progress = 0;
var sum_progress_m = 0;

export default class patient_record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // 일주일치 막대그래프
      first_date: "",
      late_date: "",
      sum_p: 0,
      sum_m: 0,
      page_l: true,
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      setShow: false,
      data2: [], // 하루 당 꺾은선 그래프
      data_: [], // 한달치 막대그래프
      token: "",
    };
  }

  handleScroll = (e) => {
    if (e.nativeEvent.contentOffset.x < 130) {
      this.setState({ page_l: true });
    } else if (e.nativeEvent.contentOffset.x > 130) {
      this.setState({ page_l: false });
    }
  };

  user_cat_day = (date, user_token) => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/cat/period/" +
        date +
        "?day=7",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + String(user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        var cat_change_array = json.data;
        var cat_put_array = {};
        var change_put_array = [];

        cat_change_array.map((x) => {
          cat_put_array = {};
          for (let i = 0; i < x.progress.length; i++) {
            var cat_name = "CAT" + (i + 1);
            var cat_day = x.progress[i].day;
            cat_put_array[cat_name] = x.progress[i].percent * 100;
          }
          cat_put_array["R_date"] =
            String(cat_day).substring(5, 7) + String(cat_day).substring(8, 10);
          change_put_array.push(cat_put_array);
        });
        this.setState({ data2: change_put_array });
      });
  };

  user_week_day = (date, user_token) => {
    console.log(date);
    console.log(user_token);
    var data_array = [];
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/period/" +
        date +
        "?day=7",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + String(user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        console.error(error);
      })
      .then((json) => {
        for (let i = 0; i < json.data.length; i++) {
          data_array.push(json.data[i]);
        }

        for (let j = 0; j < 7 - json.data.length; j++) {
          var now = new Date(date);
          var yesterday = new Date(now.setDate(now.getDate() - j)); // 어제
          var date2 = this.date_change(yesterday);

          var add_data = {
            day: date2,
            cat: "null",
            percent: 0,
          };
          data_array.push(add_data);
        }

        this.setState({ data: data_array.reverse() }, () => {
          return this.state.data;
        });

        this.setState({ sum_p: 0 });
        sum_progress = 0;

        var day_count_progress = this.state.data;

        day_count_progress.map((x) => {
          sum_progress += x.percent * 100;
          this.setState({
            sum_p: json.data.length === 0 ? 0 : sum_progress / json.data.length,
          });
        });

        day_count_progress.filter((x, y) => {
          if (y === 0)
            this.setState({
              first_date:
                String(x.day).substring(0, 4) +
                String(x.day).substring(5, 7) +
                String(x.day).substring(8, 10),
            });
          if (y === 6)
            this.setState({
              late_date:
                String(x.day).substring(0, 4) +
                String(x.day).substring(5, 7) +
                String(x.day).substring(8, 10),
            });
        });
      });
  };

  user_month = (date, user_token) => {
    var data_array = [];
    var lastDate = "";
    if (date == this.date_change(new Date())) lastDate = date.substring(8, 10);
    else
      var lastDate = new Date(
        date.substring(0, 4),
        date.substring(5, 7),
        0
      ).getDate();
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/period/" +
        date +
        "?day=" +
        lastDate,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + String(user_token).slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        for (let i = 0; i < json.data.length; i++) {
          data_array.push(json.data[i]);
        }

        for (let j = 0; j < lastDate - 1; j++) {
          var now = new Date(date);
          var yesterday = new Date(now.setDate(now.getDate() - j)); // 어제
          var date2 = this.date_change(yesterday);
          if (String(date2).substring(8, 10) === lastDate) {
            break;
          }
          var add_data = {
            day: date2,
            cat: "null",
            percent: 0,
          };
          data_array.push(add_data);
        }

        this.setState({ data_: data_array.reverse() }, () => {
          return this.state.data_;
        });

        this.setState({ sum_m: 0 });
        sum_progress_m = 0;

        var day_count_progress = this.state.data_;

        day_count_progress.map((x) => {
          sum_progress_m += x.percent * 100;
          this.setState({
            sum_m:
              json.data.length === 0 ? 0 : sum_progress_m / json.data.length,
          });
        });
      });
  };

  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");
    this.setState({
      token: user_token,
    });

    var today = this.date_change(new Date());
    console.log(today);
    this.user_week_day(today, this.state.token);
    this.user_cat_day(today, this.state.token);
    this.user_month(today, this.state.token);
  }

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.hideDatePicker();
    var today = this.date_change(date);

    console.log(today);

    this.user_week_day(today, this.state.token);
    this.user_cat_day(today, this.state.token);
    this.user_month(today, this.state.token);
  };

  showDatePicker = () => {
    console.log("클릭됨");
    this.setState({ setDatePickerVisibility: true, isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({
      setDatePickerVisibility: false,
      isDatePickerVisible: false,
    });
  };

  date_change = (date) => {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var today =
      year +
      "-" +
      ("00" + month.toString()).slice(-2) +
      "-" +
      ("00" + day.toString()).slice(-2);

    return today;
  };

  onValueChange = () => {
    var newDate = new Date();
    const selectedDate = newDate || date;
    this.setState({ setDate: selectedDate, setShow: false });
  };

  onmonthPress = (id) => {
    if (id.length === 1) var click_date = "20220" + id + "00";
    else var click_date = "2022" + id + "00";
    this.setState({ late_date: click_date });
  };

  onMenuPress = (id) => {
    if (id.length === 1) var click_date = "20220" + id + "00";
    else var click_date = "2022" + id + "00";
    this.setState({ late_date: click_date });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
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
            <ScrollView
              horizontal
              contentContainerStyle={{ width: responsiveScreenWidth(100) * 2 }}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              onScroll={this.handleScroll}
            >
              <View style={styles.secondView}>
                <View style={styles.textview}>
                  <View style={{ flexDirection: "row" }}>
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
                    <View style={styles.margin}></View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={this.showDatePicker}
                    >
                      <DateTimePickerModal
                        isVisible={this.state.isDatePickerVisible}
                        mode="date"
                        onConfirm={this.handleConfirm}
                        onCancel={this.hideDatePicker}
                      />
                      <MaterialIcons
                        name="date-range"
                        style={{ fontSize: responsiveScreenFontSize(3) }}
                        color="#316200"
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.text2}>
                    최근 7일 평균 {this.state.sum_p.toFixed(1)}%
                  </Text>
                </View>

                <SafeAreaView
                  style={{
                    width: "100%",
                    height: responsiveScreenHeight(17),
                  }}
                >
                  <FlatList
                    keyExtractor={(item, index) => index}
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                      return (
                        <Task1
                          id={index}
                          put_date={item.day}
                          progress={item.percent}
                        ></Task1>
                      );
                    }}
                    horizontal={true}
                  ></FlatList>
                </SafeAreaView>
              </View>
              <View style={styles.secondView}>
                <View style={styles.textview}>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.text1}>
                      {String(this.state.late_date).substring(0, 4) +
                        "년 " +
                        String(this.state.late_date).substring(4, 6) +
                        "월"}
                    </Text>
                    <View style={styles.margin}></View>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={this.showDatePicker}
                    >
                      <MaterialIcons
                        name="date-range"
                        style={{ fontSize: responsiveScreenFontSize(3) }}
                        color="#316200"
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.text2}>
                    월 평균 {this.state.sum_m.toFixed(1)}%
                  </Text>
                </View>

                <SafeAreaView
                  style={{
                    width: "100%",
                    height: responsiveScreenHeight(17),
                  }}
                >
                  <FlatList
                    keyExtractor={(item, index) => index}
                    data={this.state.data_}
                    renderItem={({ item, index }) => {
                      return (
                        <Taskm
                          id={index}
                          put_date={item.day}
                          progress={item.percent}
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
                width={responsiveScreenWidth(2.7)}
                height={responsiveScreenHeight(1.5)}
                asset={this.state.page_l == true ? page_here : page_no}
              />
              <View style={styles.pp_margin}></View>
              <WithLocalSvg
                width={responsiveScreenWidth(2.7)}
                height={responsiveScreenHeight(1.5)}
                asset={this.state.page_l == false ? page_here : page_no}
              />
              <View style={styles.p_margin}></View>
            </View>

            <View style={styles.threeView}>
              <SafeAreaView style={{ width: "100%" }}>
                <FlatList
                  keyExtractor={(item, index) => index}
                  data={this.state.data2}
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
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#F8F8F8",
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: "8.5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
    paddingRight: "5%",
    paddingLeft: "5%",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2.48),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  page_location: {
    flexDirection: "row",
    marginTop: "0.5%",
    marginBottom: "2%",
  },
  chart: {
    flex: 0.8,
    backgroundColor: "#5CB405",
  },

  text11: {
    fontSize: responsiveScreenFontSize(1.68),
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

  mainView: {
    paddingTop: "1.8%",
    flexDirection: "column",
    height: responsiveScreenHeight(70),
    backgroundColor: "#F8F8F8",
    marginBottom: responsiveScreenHeight(17),
  },
  secondView: {
    marginTop: "2%",
    marginLeft: responsiveScreenWidth(4.7),
    marginRight: responsiveScreenWidth(4.7),
    paddingLeft: "3.1%",
    paddingRight: "3.1%",
    paddingTop: "3.1%",
    paddingBottom: "2%",
    marginBottom: "1%",
    height: responsiveScreenHeight(30.9),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    width: responsiveScreenWidth(90),
  },
  threeView: {
    marginLeft: responsiveScreenWidth(4.7),
    marginRight: responsiveScreenWidth(4.7),
    marginBottom: "2%",
    paddingTop: "3.1%",
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#E0E0E0",
  },

  text1: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(1.68),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    marginBottom: "1%",
  },
  text2: {
    alignItems: "flex-start",
    fontSize: responsiveScreenFontSize(2.12),
    color: "#000000",
    fontWeight: "bold",
  },
  textview: {
    marginBottom: "1.8%",
    justifyContent: "center",
  },
  oneview: {
    flex: 1,
    marginBottom: 5,
  },
});
