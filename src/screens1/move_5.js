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

const storeData = async (value1, value2) => {
  try {
    await AsyncStorage.setItem("@walk_minutes", value1);
    await AsyncStorage.setItem("@ride_minutes", value2);
  } catch (e) {
    console.log("error");
  }
};

const resetData = async (value1) => {
  try {
    await AsyncStorage.setItem("@walk_seconds", value1);
    await AsyncStorage.setItem("@ride_seconds", value1);
  } catch (e) {
    console.log("error");
  }
};

export default class move_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_length: 0,
    };
  }
  async componentDidMount() {
    const user_token = await AsyncStorage.getItem("@user_token");

    this.cat_list(user_token);
  }

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
    storeData(walk_m, ride_m);
  };

  date_reset_check = (timeend) => {
    if (
      String(timeend).substring(11, 13) === "00" &&
      String(timeend).substring(14, 16) === "00"
    ) {
      console.log("reset");
      resetData("00");
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
              this.props.navigation.navigate("TabNavigation1");
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
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
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
    marginTop: "2%",
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
