import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Task from "./task_yusanso";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import walk_play from "../icon/walk_play.svg";
import ride_play from "../icon/ride_play.svg";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyOTQ0NTMsImV4cCI6MTY0Mzg5OTI1M30._Cvfjjc2w5yfS-NSUGDaW-EXBnbsKIL7j7FTsJxAe2jklaxL86tJmwiKajEZSOKO91_roCZbMBZQpy0Tq6PIVg"
);

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
  componentDidMount() {
    this.cat_list();
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

  cat_list = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/exercise?cat=4",
      {
        method: "GET",
        headers: myHeaders,
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
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation1");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>유산소 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
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
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  menuView: {
    marginTop: "3%",
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
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
    justifyContent: "center",
    flex: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "30%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
