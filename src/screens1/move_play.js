import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Video } from "expo-av";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDMyOTQ0NTMsImV4cCI6MTY0Mzg5OTI1M30._Cvfjjc2w5yfS-NSUGDaW-EXBnbsKIL7j7FTsJxAe2jklaxL86tJmwiKajEZSOKO91_roCZbMBZQpy0Tq6PIVg"
);
myHeaders.append("Content-Type", "application/json");

let data = {
  1: require("../video/1-1.mp4"),
  2: require("../video/1-2.mp4"),
  3: require("../video/1-3.mp4"),
  4: require("../video/1-4.mp4"),
  5: require("../video/1-5.mp4"),
  6: require("../video/1-6.mp4"),
  7: require("../video/1-7.mp4"),
  8: require("../video/1-8.mp4"),
  9: require("../video/1-9.mp4"),
  10: require("../video/1-10.mp4"),
  11: require("../video/1-11.mp4"),
  12: require("../video/1-12.mp4"),

  13: require("../video/2-1.mp4"),
  14: require("../video/2-2.mp4"),
  15: require("../video/2-3.mp4"),
  16: require("../video/2-4.mp4"),
  17: require("../video/2-5.mp4"),
  18: require("../video/2-6.mp4"),
  19: require("../video/2-7.mp4"),
  20: require("../video/2-8.mp4"),
  21: require("../video/2-9.mp4"),
  22: require("../video/2-10.mp4"),
  23: require("../video/2-11.mp4"),
  24: require("../video/2-12.mp4"),
  25: require("../video/2-13.mp4"),
  26: require("../video/2-14.mp4"),

  27: require("../video/3-1.mp4"),
  28: require("../video/3-2.mp4"),
  29: require("../video/3-3.mp4"),
  30: require("../video/3-4.mp4"),
  31: require("../video/3-5.mp4"),

  32: require("../video/4-1.mp4"),
  33: require("../video/4-2.mp4"),
  34: require("../video/4-3.mp4"),
  35: require("../video/4-4.mp4"),
  36: require("../video/4-5.mp4"),
  37: require("../video/4-6.mp4"),
  38: require("../video/4-7.mp4"),
  39: require("../video/4-8.mp4"),
  40: require("../video/4-9.mp4"),
  41: require("../video/4-10.mp4"),
  42: require("../video/4-11.mp4"),
  43: require("../video/4-12.mp4"),
  44: require("../video/4-13.mp4"),
  45: require("../video/4-14.mp4"),
};

let data_time = {
  1: "2:31",
  2: "4:01",
  3: "2:31",
  4: "3:22",
  5: "3:45",
  6: "3:0",
  7: "3:11",
  8: "1:10",
  9: "1:24",
  10: "2:19",
  11: "4:37",
  12: "2:14",

  13: "1:18",
  14: "2:4",
  15: "1:42",
  16: "1:36",
  17: "2:41",
  18: "2:26",
  19: "1:43",
  20: "1:53",
  21: "1:23",
  22: "1:47",
  23: "1:14",
  24: "1:29",
  25: "0:27",
  26: "0:22",

  27: "2:10",
  28: "2:20",
  29: "2:6",
  30: "1:19",
  31: "1:32",

  32: "0:27",
  33: "0:14",
  34: "0:20",
  35: "0:30",
  36: "0:21",
  37: "0:15",
  38: "0:16",
  39: "0:19",
  40: "0:20",
  41: "0:17",
  42: "0:21",
  43: "1:3",
  44: "1:7",
  45: "1:1",
};

import AsyncStorage from "@react-native-async-storage/async-storage";

export default class move_play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      done_num: 0,
      assign_num: 0,
      list: [],
      next_name: "",
      next_done_num: 0,
      next_assign_num: 0,
      next_eid: 0,
      video_start: false,
    };
  }

  async componentDidMount() {
    console.log(this.props.route.params.eid);
    try {
      const list = await AsyncStorage.getItem("@move_play");

      if (list !== null) {
        this.setState({ list: JSON.parse(list) });
      }
    } catch (e) {
      this.setState({ minutes_Counter: "00", seconds_Counter: "00" });
    }

    this.setState({
      done_num: this.props.route.params.done_num,
      assign_num: this.props.route.params.assign_num,
    });
    this.Time();
    this.params_move();
  }

  params_move = () => {
    var params_array = this.state.list;

    if (
      this.props.route.params.eid === 12 &&
      this.props.route.params.eid === 26 &&
      this.props.route.params.eid === 31 &&
      this.props.route.params.eid === 45
    )
      this.setState({ next_name: "" });
    else {
      params_array.map((x) => {
        if (x.eid === this.props.route.params.eid + 1) {
          this.setState({
            next_eid: x.eid,
            next_name: x.ename,
            next_done_num: x.donecnt,
            next_assign_num: x.setcnt,
          });
        }
      });
    }
    //this.props.route.params.eid
  };

  Time = () => {
    // 1,000가 1초
    var move_time =
      (parseInt(
        String(data_time[this.props.route.params.eid]).substring(0, 1)
      ) *
        60 +
        parseInt(
          String(data_time[this.props.route.params.eid]).substring(2, 5)
        )) *
      1000;

    setTimeout(() => {
      this.setState({
        isLoading: false,
        done_num: this.props.route.params.done_num + 1,
        video_start: true,
      });
    }, 1000); // 배포할 때 move_time로 바꾸기
  };

  nextpage = () => {
    if (this.state.isLoading === false) {
      this.setState({ video_start: false });
      if (this.state.done_num >= this.state.assign_num) {
        this.save_progress();

        if (this.next_name === "") this.where_page();
        else this.where_move_go();
      } else {
        this.save_progress();
        this.props.navigation.reset({
          routes: [
            {
              name: "move_play",
              params: {
                eid: this.props.route.params.eid,
                ename: this.props.route.params.ename,
                cat_name: this.props.route.params.cat_name,
                done_num: this.state.done_num,
                assign_num: this.state.assign_num,
              },
            },
          ],
        });
      }
    }
  };
  where_page = () => {
    this.setState({ video_start: false });
    if (this.props.route.params.cat_name == 1) {
      this.props.navigation.navigate("move_1");
    } else if (this.props.route.params.cat_name == 2) {
      this.props.navigation.navigate("move_2");
    } else if (this.props.route.params.cat_name == 3) {
      this.props.navigation.navigate("move_3");
    } else if (this.props.route.params.cat_name == 4) {
      this.props.navigation.navigate("move_4");
    }
  };

  where_move_go = () => {
    this.props.navigation.reset({
      routes: [
        {
          name: "move_play",
          params: {
            eid: this.state.next_eid,
            ename: this.state.next_name,
            cat_name: this.props.route.params.cat_name,
            done_num: this.state.next_done_num,
            assign_num: this.state.next_assign_num,
          },
        },
      ],
    });
  };

  save_progress = () => {
    fetch("http://hccparkinson.duckdns.org:19737/progress/write", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        eid: this.props.route.params.eid,
        setcnt: this.state.assign_num,
        donecnt: this.state.done_num,
      }),
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        console.log("저장 성공");
      }
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
            onPress={this.where_page}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>{this.props.route.params.ename}</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>

        <View style={styles.secondView}>
          <Video
            source={data[this.props.route.params.eid]}
            rate={1.0}
            volume={1.0}
            resizeMode="cover"
            shouldPlay
            useNativeControls
            style={styles.fullScreen}
            paused={this.state.video_start}
          />
        </View>

        <View style={styles.chatControl}>
          <TouchableOpacity
            style={
              this.state.isLoading === false
                ? styles.sendButton
                : styles.sendButton1
            }
            activeOpacity={0.8}
            onPress={this.nextpage}
          >
            <View style={styles.mg}></View>
            <View style={styles.margin}></View>
            <View style={styles.margin}></View>
            <Text
              style={
                this.state.isLoading === false ? styles.white : styles.green1
              }
            >
              {this.state.isLoading === false
                ? this.state.done_num < this.state.assign_num
                  ? "다 음  세 트  ( " +
                    this.state.done_num +
                    " / " +
                    this.state.assign_num +
                    " )"
                  : "다 음  운 동"
                : this.state.done_num !== this.state.assign_num
                ? "다 음  세 트 ( " +
                  this.state.done_num +
                  " / " +
                  this.state.assign_num +
                  " )"
                : "다 음  운 동"}
            </Text>
            <View style={styles.margin}></View>
            <View style={styles.margin}>
              <AntDesign
                name="right"
                size={15}
                color={this.state.isLoading === false ? "#FFFFFF" : "#AFAFAF"}
              />
            </View>
            <View style={styles.mg}></View>
          </TouchableOpacity>
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
  fullScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  menuView: {
    marginTop: "10%",
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
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "5%",
    marginBottom: "5%",
    flex: 1,
  },
  white: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  green1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#AFAFAF",
    alignItems: "center",
    justifyContent: "center",
  },

  sendButton: {
    backgroundColor: "#7AC819",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  sendButton1: {
    backgroundColor: "#F5F5F5",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  chatControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-end",
    paddingRight: 20,
    justifyContent: "center",
    flex: 1,
  },
  mg: {
    flex: 0.1,
  },
});
