import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import Task from "./task_yusanso";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import walk_play from "../icon/walk_play.svg";
import ride_play from "../icon/ride_play.svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";


export default class move_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_length: 0,
      check: false,
      today_date: new Date(),
    };
  }

  async componentDidUpdate() {
    if (this.state.check === false) {
      if (this.props.route.params.check === 1) {
        const user_token = await AsyncStorage.getItem("@user_token");
        this.cat_list(user_token);
      }
      this.setState({ check: true });
    }
  }
  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");
    this.cat_list(user_token);
  }

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

  resetData_check = async (value1) => {
    try {
      const alarm_today_check = await AsyncStorage.getItem(
        "@alarm_today_check"
      );
      if (alarm_today_check !== this.date_change(this.Date())) {
        await AsyncStorage.setItem(
          "@alarm_today_check",
          this.date_change(this.Date())
        );
        await AsyncStorage.setItem("@walk_seconds", value1);
        await AsyncStorage.setItem("@ride_seconds", value1);
      }
    } catch (e) {
      console.log("error");
    }
  };

  minutes_save = () => {
    var save_array = this.state.data;
    var walk_m = 0;
    var ride_m = 0;

    var walk_timeend = "";
    var ride_timeend = "";
    save_array.map((x) => {
      if (x.ename === "걷기") {
        walk_m = x.donecnt;
        walk_timeend = x.timeend;
      }
      if (x.ename === "자전거타기") {
        ride_m = x.donecnt;
        ride_timeend = x.timeend;
      }
    });

    walk_m =
      String(walk_m).length === 1 ? "0" + String(walk_m) : String(walk_m);

    ride_m =
      String(ride_m).length === 1 ? "0" + String(ride_m) : String(ride_m);

    this.date_reset_check(walk_timeend);
  };

  date_reset_check = (timeend) => {
    if (
      String(timeend).substring(11, 13) === "00" &&
      String(timeend).substring(14, 16) === "00"
    ) {
      console.log("reset");
      resetData_check();
    }
  };

  cat_list = (user_token) => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/exercise?cat=4",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + user_token.slice(1, -1),
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json.data, data_length: json.data.length });
        console.log(json);
        this.minutes_save();
      });
  };
  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.push("TabNavigation1", {
                init_set: "move",
                reset_check: 1,
              });
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>유산소 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons
            name="star"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#ffffff"
          />
        </View>

        <View style={styles.secondView}>
          <FlatList
            keyExtractor={(item, index) => index}
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    item.ename === "걷기"
                      ? this.props.navigation.push("yusanso_1", {
                          eid: item.eid,
                          done_num: item.donecnt,
                          assign_num: item.setcnt,
                        })
                      : this.props.navigation.push("yusanso_2", {
                          eid: item.eid,
                          done_num: item.donecnt,
                          assign_num: item.setcnt,
                        });
                  }}
                >
                  <Task
                    image={item.ename === "걷기" ? walk_play : ride_play}
                    text1={item.ename}
                    text2={item.donecnt}
                    text3={item.setcnt}
                  ></Task>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finalView: {
    height: responsiveScreenHeight(100),
    width: responsiveScreenWidth(100),
    backgroundColor: "#FFFFFF",
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

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "35%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
