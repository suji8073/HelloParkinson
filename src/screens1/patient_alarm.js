import React, { Component } from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import Task from "./task_alarm";

import { WithLocalSvg } from "react-native-svg";

import plussvg from "../icon/plus.svg";
import ActionButton from "react-native-action-button";

export default class patient_alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  userfunc = () => {
    fetch("http://152.70.233.113/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
    return this.state.data;
  };
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
        </View>

        <View
          style={{ padding: "5%", backgroundColor: "#F8F8F8", height: "100%" }}
        >
          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("alarm_edit", {
                  apm: "오전",
                  hour: "10",
                  minute: "00",
                  cycle: "매일 반복하기",
                });
              }}
            >
              <Task
                apm="오전"
                hour="10"
                minute="00"
                cycle="매일 반복하기"
              ></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("alarm_edit", {
                  apm: "오후",
                  hour: "12",
                  minute: "30",
                  cycle: "일주일마다 반복하기",
                });
              }}
            >
              <Task
                apm="오후"
                hour="12"
                minute="30"
                cycle="일주일마다 반복하기"
              ></Task>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("alarm_edit", {
                  apm: "오후",
                  hour: "3",
                  minute: "30",
                  cycle: "오늘 하루만 알림",
                });
              }}
            >
              <Task
                apm="오후"
                hour="3"
                minute="30"
                cycle="오늘 하루만 알림"
              ></Task>
            </TouchableOpacity>
          </ScrollView>

          <ActionButton
            buttonColor="#577F67"
            style={styles.plusbtn}
            renderIcon={() => (
              <WithLocalSvg
                width={90}
                height={90}
                asset={plussvg}
                onPress={() => {
                  this.props.navigation.navigate("alarm_add");
                }}
              />
            )}
          ></ActionButton>
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
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
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
  plusbtn: {
    position: "absolute",
    left: "70%",
    bottom: "30%",
  },
});
