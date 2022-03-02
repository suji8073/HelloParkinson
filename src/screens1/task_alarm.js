import React, { Component } from "react";
import { TouchableOpacity, View, Text, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const storeData = async (array) => {
  try {
    await AsyncStorage.setItem("@alarm", array);
    console.log(array);
    console.log("clear");
  } catch (e) {
    console.log(e);
  }
};

export default class alarm_task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarm_check: 1,
      alarm_array: [],
    };
  }

  async componentDidMount() {
    this.setState({ alarm_check: this.props.check });
    try {
      const alarm_array = await AsyncStorage.getItem("@alarm");
      if (alarm_array !== null) {
        this.setState({ alarm_array: JSON.parse(alarm_array) });
      }
    } catch (e) {
      console.log("불러와지는 error");
    }

    Notifications.scheduleNotificationAsync({
      content: {
        title: "⏰ " + this.state.user_name + "님!\n운동해야 할 시간이에요! ⏰",
        body:
          "일일 목표 달성까지 " + (100 - this.state.progress) + "% 남았습니다.",
        sound: "mp_ring.mp3",
      },
      trigger: {
        //seconds: 1, //onPress가 클릭이 되면 60초 뒤에 알람이 발생합니다.
        //setDate: now.setDate(now.getSeconds() + 1),
        hour:
          this.props.apm === "오전" ? this.props.hour : this.props.hour + 12,
        minute: this.props.minute,
        repeats: true,
      },
    });
  }

  handleClick = () => {
    console.log(this.props.check);
    if (this.state.alarm_check === 0) {
      // 비활성화에서 활성화로
      var change_array = this.state.alarm_array;
      change_array.filter((x, y) => {
        if (y === this.props.index) x.check = 1;
      });
      this.setState({
        alarm_check: 1,
        alarm_array: change_array,
      });
      storeData(JSON.stringify(change_array));
    } else {
      // 활성화에서 비활성화로
      var change_array = this.state.alarm_array;
      change_array.filter((x, y) => {
        if (y === this.props.index) x.check = 0;
      });
      this.setState({
        alarm_check: 0,
        alarm_array: change_array,
      });
      storeData(JSON.stringify(change_array));
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          borderRadius: 6,
          borderWidth: 2,
          marginTop: "2%",
          paddingRight: "5%",
          paddingLeft: "5%",
          paddingTop: "7%",
          paddingBottom: "7%",
          backgroundColor: "#ffffff",
          borderColor: "#E0E0E0",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "column", flex: 8 }}>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(3.2),
              justifyContent: "flex-start",
            }}
          >
            {this.props.apm} {this.props.hour} : {this.props.minute}
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Switch
            style={{
              transform: [
                { scaleX: responsiveScreenHeight(0.18) },
                { scaleY: responsiveScreenHeight(0.18) },
              ],
            }}
            ios_backgroundColor={"black"}
            trackColor={{ false: "#BBBBBB", true: "#5CB405" }}
            //trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.alarm_check === 1 ? "#ffffff" : "#ffffff"}
            value={this.state.alarm_check === 1 ? true : false}
            onChange={this.handleClick}
          />
        </View>
      </View>
    );
  }
}
