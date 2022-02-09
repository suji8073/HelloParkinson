import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

import plussvg from "../icon/plus.svg";
import nosvg from "../icon/no.svg";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

import Context from "../Context/context";

import AsyncStorage from "@react-native-async-storage/async-storage";

import DateTimePickerModal from "react-native-modal-datetime-picker";

const storeData = async (array) => {
  try {
    await AsyncStorage.setItem("@alarm", JSON.stringify(array));
    console.log("clear");
  } catch (e) {
    // saving error
    console.log("error");
  }
};

export default class alarm_add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apm: "",
      hour: "00",
      minute: "00",
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      pickdate: new Date(),
      alarm_array: [],
      last_key: 0,
    };
  }

  async componentDidMount() {
    try {
      const alarm_array = await AsyncStorage.getItem("@alarm");
      console.log(alarm_array);

      if (alarm_array !== null) {
        this.setState({ alarm_array: alarm_array });
      }
    } catch (e) {
      console.log("불러와지는 error");
    }
    var check_array = JSON.parse(this.state.alarm_array);
    var last_num = 0;
    check_array.filter((x, y) => {
      last_num = y;
    });
    this.setState({ last_key: last_num + 2 });
  }

  onPress_apm1 = () => {
    this.setState({ apm: "오전" });
  };

  onPress_apm2 = () => {
    this.setState({ apm: "오후" });
  };

  showDatePicker = () => {
    this.setState({ setDatePickerVisibility: true, isDatePickerVisible: true });
  };

  hideDatePicker = () => {
    this.setState({
      setDatePickerVisibility: false,
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.dateToStr(date);
    this.hideDatePicker();
  };

  dateToStr = (date) => {
    this.setState({ pickdate: date });
    var p_hours = date.getHours();
    var p_minute = date.getMinutes();

    console.log(p_hours + ":" + p_minute);

    if (p_minute === 0) this.setState({ minute: "00" });
    else this.setState({ minute: p_minute });
    if (p_hours === 24) this.setState({ apm: "오전", hour: 12 });
    else if (p_hours > 12) this.setState({ apm: "오후", hour: p_hours - 12 });
    else if (p_hours === 12) this.setState({ apm: "오후", hour: p_hours });
    else this.setState({ apm: "오전", hour: p_hours });
  };
  addalarm = () => {
    Alert.alert("알림을 추가하시겠어요?", "", [
      {
        text: "취 소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "추 가",
        onPress: () => {
          console.log("OK Pressed");
          if (this.state.apm === "" || this.state.hour == "00")
            Alert.alert("시간을 입력해주세요.");
          else {
            var add_clock = {
              key: this.state.last_key,
              apm: this.state.apm,
              hour: this.state.hour,
              minute: this.state.minute,
              check: 1,
            };

            if (this.state.alarm_array.length === 0) {
              var change_clock = [];
              change_clock.push(add_clock);
            } else {
              var change_clock = JSON.parse(this.state.alarm_array);
              change_clock.push(add_clock);
            }
            console.log("!" + JSON.stringify(change_clock));
            storeData(change_clock);

            //this.props.navigation.pop();
            this.props.navigation.push("TabNavigation1");
          }
        },
      },
    ]);
  };

  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.pop();
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>나의 운동 알림</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#FFFFFF"
          />
        </View>

        <View style={styles.secondView}>
          <View style={styles.firstView}>
            <View
              style={{
                alignItems: "center",
                borderRightWidth: 3,
                borderColor: "#E0E0E0",
                flex: 5,
              }}
            >
              <TouchableOpacity activeOpacity={0.8} onPress={this.onPress_apm1}>
                <Text
                  style={this.state.apm === "오전" ? styles.apm2 : styles.apm1}
                >
                  오 전
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 5, alignItems: "center" }}>
              <TouchableOpacity activeOpacity={0.8} onPress={this.onPress_apm2}>
                <Text
                  style={this.state.apm === "오후" ? styles.apm2 : styles.apm1}
                >
                  오 후
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <DateTimePickerModal
            isVisible={this.state.isDatePickerVisible}
            mode="time"
            date={this.state.pickdate}
            onConfirm={this.handleConfirm}
            onCancel={this.hideDatePicker}
          />
          <View style={styles.twoview}>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.showDatePicker}
              >
                <Text style={styles.time1}>{this.state.hour}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.time1}>:</Text>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={this.showDatePicker}
              >
                <Text style={styles.time1}>{this.state.minute}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.threeview}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.pop();
              }}
            >
              <WithLocalSvg
                width={responsiveScreenWidth(20)}
                height={responsiveScreenWidth(20)}
                asset={nosvg}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.addalarm}>
              <WithLocalSvg
                width={responsiveScreenWidth(20)}
                height={responsiveScreenWidth(20)}
                asset={plussvg}
              />
            </TouchableOpacity>
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
    marginTop: "5.1%",
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

  apm1: {
    fontSize: responsiveScreenFontSize(2.8),
    fontWeight: "bold",
    color: "#B5B5B5",
  },

  apm2: {
    fontSize: responsiveScreenFontSize(2.8),
    fontWeight: "bold",
    color: "#000000",
  },

  time1: {
    fontSize: responsiveScreenFontSize(5),
    color: "#000000",
  },

  threeview: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },

  firstView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3.1%",
    borderColor: "#E0E0E0",
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: "4.7%",
    marginRight: "4.7%",
    marginTop: "15%",
    marginBottom: "6.7%",
    backgroundColor: "#ffffff",
    height: responsiveScreenHeight(10.3),
  },

  twoview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3.1%",
    borderColor: "#E0E0E0",
    borderRadius: 6,
    borderWidth: 2,
    marginLeft: "4.7%",
    marginRight: "4.7%",
    backgroundColor: "#ffffff",
    height: responsiveScreenHeight(15),
  },

  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
});
