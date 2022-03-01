import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  StatusBar,
  Button,
} from "react-native";
import Task from "./task_alarm";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WithLocalSvg } from "react-native-svg";

import plussvg from "../icon/plus.svg";
import ActionButton from "react-native-action-button";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

var alarm = [
  { key: 1, apm: "오전", hour: "10", minute: "00", check: 1 },
  { key: 2, apm: "오후", hour: "4", minute: "00", check: 1 },
];

export default class patient_alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      alarm_array: [],
    };
  }

  async componentDidMount() {
    try {
      //await AsyncStorage.clear();
      const alarm_array = await AsyncStorage.getItem("@alarm");
      if (alarm_array === null) {
        await AsyncStorage.setItem("@alarm", JSON.stringify(alarm));
      }
      console.log(alarm_array);

      if (alarm_array !== null) {
        this.setState({ alarm_array: JSON.parse(alarm_array) });
      }
    } catch (e) {
      console.log("error");
    }
  }

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
        </View>

        <ScrollView style={styles.secondView}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.state.alarm_array}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("alarm_edit", {
                      apm: item.apm,
                      hour: item.hour,
                      minute: item.minute,
                      key: item.key,
                      index: index,
                    });
                  }}
                >
                  <Task
                    index={index}
                    apm={item.apm}
                    hour={item.hour}
                    minute={item.minute}
                    check={item.check}
                  ></Task>
                </TouchableOpacity>
              );
            }}
          />
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

  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  secondView: {
    paddingLeft: "4.7%",
    paddingRight: "4.7%",
    height: responsiveScreenHeight(70),
    backgroundColor: "#F8F8F8",
    marginBottom: responsiveScreenHeight(25),
  },

  plusbtn: {
    position: "absolute",
    bottom: responsiveScreenHeight(25),
  },
});
