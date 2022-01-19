import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import Task from "./task_alarm";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { WithLocalSvg } from "react-native-svg";

import plussvg from "../icon/plus.svg";
import ActionButton from "react-native-action-button";

var alarm = [
  { key: 1, apm: "오전", hour: "10", minute: "00", check: 1 },
  { key: 2, apm: "오후", hour: "4", minute: "00", check: 1 },
];

const storeData = async (value1, value2) => {
  try {
    await AsyncStorage.setItem("@alarm", JSON.stringify(alarm));
  } catch (e) {
    // saving error
    console.log("error");
  }
};

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
      //await AsyncStorage.setItem("@alarm", JSON.stringify(alarm));
      const alarm_array = await AsyncStorage.getItem("@alarm");

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
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
        </View>

        <View
          style={{
            paddingLeft: "5%",
            paddingRight: "5%",
            backgroundColor: "#F8F8F8",
            height: "100%",
          }}
        >
          <FlatList
            keyExtractor={(item, index) => index}
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
