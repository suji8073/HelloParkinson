import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  StatusBar,
  TouchableNativeFeedbackBase,
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
      user_name: "",
      progress: 0,
    };
  }

  async componentDidMount() {
    try {
      //await AsyncStorage.clear();
      const alarm_array = await AsyncStorage.getItem("@alarm");
      const user_data = await AsyncStorage.getItem("@user_data");

      this.setState({ user_name: JSON.parse(user_data)["name"] });
      console.log(alarm_array);
      if (alarm_array === null) {
        await AsyncStorage.setItem("@alarm", JSON.stringify(alarm));
      }
      if (alarm_array !== null) {
        this.setState({ alarm_array: JSON.parse(alarm_array) });
      }
    } catch (e) {
      console.log("error");
    }

    const user_token = await AsyncStorage.getItem("@user_token");
    this.progress_get(user_token);

    
  }

  progress_get = (user_token) => {
    fetch("http://hccparkinson.duckdns.org:19737/progress", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user_token.slice(1, -1),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          progress: json.data[0].toFixed(0),
        });
      });
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
        </View>
        <TouchableOpacity
          onPress={() => {
            Notifications.scheduleNotificationAsync({
              content: {
                title:
                  "⏰ " +
                  this.state.user_name +
                  "님!\n운동해야 할 시간이에요! ⏰",
                body:
                  "일일 목표 달성까지 " +
                  (100 - this.state.progress) +
                  "% 남았습니다.",
                sound: "mp_ring.mp3",
              },
              trigger: {
                //seconds: 1, //onPress가 클릭이 되면 60초 뒤에 알람이 발생합니다.
                //setDate: now.setDate(now.getSeconds() + 1),
                hour: 20,
                minute: 40,
                repeats: true,
              },
            });
          }}
        >
          <Text style={styles.titleText}>알림 눌러바바</Text>
        </TouchableOpacity>
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
