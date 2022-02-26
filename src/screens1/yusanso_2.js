import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { activateKeepAwake, deactivateKeepAwake } from "expo-keep-awake";

import on from "../icon/move_play_on.svg";
import off from "../icon/move_play_off.svg";
import stop from "../icon/back.svg";

import ride_play from "../icon/ride_play.svg";
import ride_stop from "../icon/ride_stop.svg";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const storeData = async (value1, value2) => {
  try {
    await AsyncStorage.setItem("@ride_minutes", value1);
    await AsyncStorage.setItem("@ride_seconds", value2);
  } catch (e) {
    // saving error
    console.log("error");
  }
};

export default class yusanso_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      walk_time: 100,
      timer: null,
      minutes_Counter:
        this.props.route.params.done_num.length === 1
          ? "0" + String(this.props.route.params.done_num)
          : this.props.route.params.done_num === 0
          ? "00"
          : String(this.props.route.params.done_num),
      seconds_Counter: "00",
      startDisable: false,
      user_token: "",
    };
  }

  async componentDidMount() {
    try {
      const user_token = await AsyncStorage.getItem("@user_token");
      this.setState({ user_token: user_token });

      const value1 = await AsyncStorage.getItem("@ride_minutes");
      const value2 = await AsyncStorage.getItem("@ride_seconds");

      if (value1 !== null) {
        this.setState({ minutes_Counter: value1, seconds_Counter: value2 });
      }
    } catch (e) {
      this.setState({ minutes_Counter: "00", seconds_Counter: "00" });
      console.log("error");
      console.log(e);
    }
  }

  onButtonStart = () => {
    if (this.state.play === false) {
      this.setState({ play: true });
      activateKeepAwake("tag");
      let timer = setInterval(() => {
        var num = (Number(this.state.seconds_Counter) + 1).toString(),
          count = this.state.minutes_Counter;

        if (Number(this.state.seconds_Counter) == 59) {
          count = (Number(this.state.minutes_Counter) + 1).toString();
          num = "00";
        }

        this.setState({
          minutes_Counter: count.length == 1 ? "0" + count : count,
          seconds_Counter: num.length == 1 ? "0" + num : num,
        });
      }, 1000);
      this.setState({ timer });
      this.setState({ startDisable: true });
    } else {
      deactivateKeepAwake("tag");
      clearInterval(this.state.timer);
      this.setState({ startDisable: false });
      this.setState({ play: false });
      storeData(this.state.minutes_Counter, this.state.seconds_Counter);
    }
  };

  backout = () => {
    deactivateKeepAwake("tag");
    clearInterval(this.state.timer);
    this.setState({ startDisable: false });
    this.setState({ play: false });
    storeData(this.state.minutes_Counter, this.state.seconds_Counter);
    this.save_progress();
    this.props.navigation.push("move_5", {
      check: 1,
    });
  };

  save_progress = () => {
    fetch("http://hccparkinson.duckdns.org:19737/progress/write", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + String(this.state.user_token).slice(1, -1),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        eid: this.props.route.params.eid,
        setcnt: this.props.route.params.assign_num,
        donecnt: parseInt(this.state.minutes_Counter),
      }),
    }).then((res) => {
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
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={this.backout}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>자전거 타기</Text>
          <View style={styles.margin}></View>
          <EvilIcons
            name="star"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#ffffff"
          />
        </View>

        <View style={styles.secondView}>
          <View style={styles.two}>
            <CountdownCircleTimer
              size={responsiveScreenWidth(76.3)}
              onComplete={() => {
                return [true, 1000]; // repeat animation in 1.5 seconds
              }}
              isPlaying={this.state.play}
              duration={10}
              strokeWidth={5}
              colors={this.state.play === false ? "#C20000" : "#72B91A"}
              trailColor={this.state.play === false ? "#C20000" : "#72B91A"}
            >
              <View style={styles.circleview}>
                <WithLocalSvg
                  width={responsiveWidth(10)}
                  height={responsiveWidth(10)}
                  asset={this.state.play === false ? ride_stop : ride_play}
                />
                <Text style={styles.timetext}>
                  {this.state.minutes_Counter} : {this.state.seconds_Counter}
                </Text>
                <Text style={styles.tttext}>
                  {this.state.play === false ? "쉬는중" : "진행중"}
                </Text>
              </View>
            </CountdownCircleTimer>
          </View>

          <View style={styles.three}>
            <View style={styles.margin}></View>

            <View style={styles.textView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.onButtonStart}
              >
                <WithLocalSvg
                  width={responsiveScreenWidth(23)}
                  height={responsiveScreenWidth(23)}
                  asset={this.state.play === false ? off : on}
                  style={{ marginBottom: "2%" }}
                />
              </TouchableOpacity>
              <Text style={styles.tttext}>
                {" "}
                {this.state.play === false ? "시작" : "일시중지"}
              </Text>
            </View>

            <View style={styles.margin1}></View>

            <View style={styles.textView}>
              <TouchableOpacity activeOpacity={0.8} onPress={this.backout}>
                <WithLocalSvg
                  width={responsiveScreenWidth(23)}
                  height={responsiveScreenWidth(23)}
                  asset={stop}
                  style={{ marginBottom: "2%" }}
                />
              </TouchableOpacity>
              <Text style={styles.tttext}>나가기</Text>
            </View>

            <View style={styles.margin}></View>
          </View>
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

  tttext: {
    fontSize: responsiveScreenFontSize(2),
    alignItems: "center",
    color: "#666666",
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: "4%",
  },

  timetext: {
    fontSize: responsiveScreenFontSize(6.5),
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
    flexDirection: "row",
  },

  textView: {
    alignItems: "center",
    justifyContent: "center",
  },

  secondView: {
    marginTop: "10.3%",
    marginRight: "11.6%",
    marginLeft: "11.6%",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },

  circleview: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  two: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  three: {
    marginTop: "7%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  margin1: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
