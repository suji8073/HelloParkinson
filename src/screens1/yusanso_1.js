import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { WithLocalSvg } from "react-native-svg";

import AsyncStorage from "@react-native-async-storage/async-storage";

import on from "../icon/move_play_on.svg";
import off from "../icon/move_play_off.svg";
import stop from "../icon/move_play_stop.svg";

import walk_play from "../icon/walk_play.svg";
import walk_stop from "../icon/walk_stop.svg";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const storeData = async (value1, value2) => {
  try {
    await AsyncStorage.setItem("@walk_minutes", value1);
    await AsyncStorage.setItem("@walk_seconds", value2);
  } catch (e) {
    // saving error
    console.log("error");
  }
};

export default class yusanso_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      walk_time: 100,
      timer: null,
      minutes_Counter: "00",
      seconds_Counter: "00",
      startDisable: false,
    };
  }

  async componentDidMount() {
    try {
      const value1 = await AsyncStorage.getItem("@walk_minutes");
      const value2 = await AsyncStorage.getItem("@walk_seconds");

      if (value1 !== null) {
        this.setState({ minutes_Counter: value1, seconds_Counter: value2 });
      }
    } catch (e) {
      this.setState({ minutes_Counter: "00", seconds_Counter: "00" });
    }
  }

  onButtonStart = () => {
    if (this.state.play === false) {
      this.setState({ play: true });
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
      clearInterval(this.state.timer);
      this.setState({ startDisable: false });
      this.setState({ play: false });
      storeData(this.state.minutes_Counter, this.state.seconds_Counter);
    }
  };

  onButtonClear = () => {
    this.setState({
      timer: null,
      minutes_Counter: "00",
      seconds_Counter: "00",
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
              this.props.navigation.navigate("move_5");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>걷기</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>
        <View style={styles.secondView}>
          <View style={styles.one}></View>
          <View style={styles.two}>
            <CountdownCircleTimer
              size={280}
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
                  width={40}
                  height={40}
                  asset={this.state.play === false ? walk_stop : walk_play}
                />
                <Text style={styles.timetext}>
                  {this.state.minutes_Counter} : {this.state.seconds_Counter}
                </Text>
                <Text style={styles.ttext}>
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
                  width={90}
                  height={90}
                  asset={this.state.play === false ? off : on}
                />
              </TouchableOpacity>
              <Text style={styles.tttext}>일시 정지</Text>
            </View>

            <View style={styles.margin1}></View>

            <View style={styles.textView}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.onButtonClear}
              >
                <WithLocalSvg width={60} height={60} asset={stop} />
              </TouchableOpacity>
              <Text style={styles.tttext}>리셋</Text>
            </View>

            <View style={styles.margin}></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sel_placeholder: {
    fontSize: 25,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
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

  textView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  tttext: {
    fontSize: 17,
    alignItems: "center",
    color: "#666666",
    justifyContent: "center",
    marginTop: 5,
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  timetext: {
    fontSize: 48,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
    flexDirection: "row",
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 5,
    marginBottom: "30%",
  },

  circleview: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  onetext: {
    fontSize: 18,
    alignItems: "center",
    color: "#666666",
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 10,
  },

  onettext: {
    fontSize: 23,
    alignItems: "center",
    color: "#000000",
    fontWeight: "bold",
    justifyContent: "center",
  },

  ttext: {
    fontSize: 17,
    alignItems: "center",
    color: "#666666",
    justifyContent: "center",
    marginTop: 5,
  },

  one: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },

  two: {
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
    width: "80%",
    flexDirection: "column",
  },

  timer: {
    width: 300,
  },

  three: {
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
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
    flex: 0.3,
  },
});
