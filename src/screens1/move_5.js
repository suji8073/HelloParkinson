import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import Task from "./task_move";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { parse, WithLocalSvg } from "react-native-svg";
import RNPickerSelect from "react-native-picker-select";

import on from "../icon/move_play_on.svg";
import off from "../icon/move_play_off.svg";
import stop from "../icon/move_play_stop.svg";
import rturn from "../icon/move_play_return.svg";

import walk_play from "../icon/walk_play.svg";
import walk_stop from "../icon/walk_stop.svg";
import ride_play from "../icon/ride_play.svg";
import ride_stop from "../icon/ride_stop.svg";

import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default class move_5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      itme_value: true,
      itme_name: "자전거 타기",
      walk_time: 100,
      ride_time: 100,
    };
  }
  onPress_timer = () => {
    if (this.state.play === false) {
      this.setState({ play: true });
      console.log(this.state.user_sex);
    } else {
      this.setState({ play: false });
    }
  };
  valuechange = (value) => {
    console.log(value);
    if (value === "자전거 타기") {
      this.setState({ itme_value: true, itme_name: "자전거 타기" });
      console.log("1" + this.state.itme_value);
    } else {
      this.setState({ itme_value: false, itme_name: "걷기" });
      console.log("2" + this.state.itme_value);
    }
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
              this.props.navigation.navigate("TabNavigation1", {
                paramsName: this.props.route.params.paramsName,
              });
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>유산소 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>
        <View style={styles.secondView}>
          <View style={styles.one}>
            <Text style={styles.onetext}>현재 수행 운동</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#DCDCDC",
                overflow: "hidden",
                width: 160,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <RNPickerSelect
                style={styles.select}
                value={this.state.itme_name}
                placeholder={{
                  label: "자전거 타기",
                  value: "자전거 타기",
                }}
                placeholderTextColor="red"
                onValueChange={(value) => {
                  this.valuechange(value);
                }}
                items={[{ label: "걷기", value: "걷기" }]}
                style={{
                  placeholder: styles.sel_placeholder,
                  inputAndroid: styles.sel_placeholder,
                }}
              />
            </View>
          </View>
          <View style={styles.two}>
            <CountdownCircleTimer
              size={230}
              onComplete={() => {
                // do your stuff here
                return [true, 1500]; // repeat animation in 1.5 seconds
              }}
              isPlaying={this.state.play}
              duration={
                this.state.itme_value === true
                  ? this.state.walk_time
                  : this.state.ride_time
              }
              colors={this.state.play === false ? "#C20000" : "#72B91A"}
              trailColor="#DCDCDC"
            >
              {({ remainingTime, animatedColor }) => (
                <View style={styles.circleview}>
                  <WithLocalSvg
                    width={40}
                    height={40}
                    asset={
                      this.state.itme_value === true
                        ? this.state.play === false
                          ? ride_stop
                          : ride_play
                        : this.state.play === false
                        ? walk_stop
                        : walk_play
                    }
                  />
                  <Text style={styles.timetext}>
                    {String(Math.floor(remainingTime / 60))}
                    {":"}
                    {String(remainingTime % 60)}
                  </Text>
                  <Text style={styles.ttext}>
                    {this.state.play === false ? "쉬는중" : "진행중"}
                  </Text>
                </View>
              )}
            </CountdownCircleTimer>
          </View>
          <View style={styles.three}>
            <View style={styles.margin}></View>
            <WithLocalSvg width={60} height={60} asset={rturn} />
            <View style={styles.margin1}></View>

            <TouchableOpacity activeOpacity={0.8} onPress={this.onPress_timer}>
              <WithLocalSvg
                width={90}
                height={90}
                asset={this.state.play === false ? off : on}
              />
            </TouchableOpacity>

            <View style={styles.margin1}></View>
            <WithLocalSvg width={60} height={60} asset={stop} />
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
    flex: 1,
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
    flex: 2,
    width: "80%",
    flexDirection: "column",
  },
  timer: {
    width: 300,
  },

  three: {
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
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
