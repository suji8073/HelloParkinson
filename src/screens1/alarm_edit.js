import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
  StatusBar,
} from "react-native";

import trashsvg from "../icon/trashcan.svg";
import checksvg from "../icon/check.svg";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const storeData = async (array) => {
  try {
    await AsyncStorage.setItem("@alarm", array);
    console.log("clear");
  } catch (e) {
    // saving error
    console.log("error");
    console.log(e);
  }
};

export default class alarm_edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apm: this.props.route.params.apm,
      hour: this.props.route.params.hour,
      minute: this.props.route.params.minute,
      index: this.props.route.params.key,
      isDatePickerVisible: false,
      setDatePickerVisibility: false,
      pickdate: new Date(),
      alarm_array: [],
    };
  }

  async componentDidMount() {
    try {
      const alarm_array = await AsyncStorage.getItem("@alarm");
      if (alarm_array !== null) {
        this.setState({ alarm_array: alarm_array });
      }
    } catch (e) {
      console.log("불러와지는 error");
    }
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

    if (p_minute === 0) this.setState({ minute: "00" });
    else this.setState({ minute: p_minute });
    if (p_hours === 24) this.setState({ apm: "오전", hour: 12 });
    else if (p_hours > 12) this.setState({ apm: "오후", hour: p_hours - 12 });
    else if (p_hours === 12) this.setState({ apm: "오후", hour: p_hours });
    else this.setState({ apm: "오전", hour: p_hours });
  };

  alarm_delect = () => {
    Alert.alert("알림창", "알림을 삭제하시겠어요?", [
      {
        text: "취 소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "삭 제",
        onPress: () => {
          Alert.alert("삭제되었습니다.");
          console.log(this.state.alarm_array);
          var change_clock = JSON.parse(this.state.alarm_array);

          //console.log(change_clock);
          console.log("전");
          console.log(this.props.route.params.index + 1);
          var new_clock = [];
          change_clock.map((x) => {
            if (x.key !== this.state.index) {
              new_clock.push(x);
            }
          });

          console.log("삭제 한 후 배열 값");
          console.log(JSON.stringify(new_clock));
          storeData(JSON.stringify(new_clock));
          //this.props.navigation.pop();
          this.props.navigation.push("TabNavigation1", {
            init_set: "alarm",
          });
        },
      },
    ]);
  };

  alarm_edit_ = () => {
    Alert.alert("알림창", "알림을 수정하시겠어요?", [
      {
        text: "취 소",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "수 정",
        onPress: () => {
          Alert.alert("수정되었습니다.");
          var change_clock = JSON.parse(this.state.alarm_array);
          change_clock.filter((x, y) => {
            if (x.key === this.state.index) {
              x.apm = this.state.apm;
              x.hour = String(this.state.hour);
              x.minute = String(this.state.minute);
            }
          });
          storeData(JSON.stringify(change_clock));
          //this.props.navigation.pop();
          this.props.navigation.push("TabNavigation1", {
            init_set: "alarm",
          });
        },
      },
    ]);
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            style={{ fontSize: responsiveScreenFontSize(3) }}
            color="#808080"
            onPress={() => {
              this.props.navigation.push("TabNavigation1", {
                init_set: "alarm",
              });
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

          <View style={styles.twoview}>
            <View>
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="time"
                date={this.state.pickdate}
                onConfirm={this.handleConfirm}
                onCancel={this.hideDatePicker}
              />

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
            <TouchableOpacity onPress={this.alarm_delect}>
              <WithLocalSvg width={90} height={90} asset={trashsvg} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.alarm_edit_}>
              <WithLocalSvg width={90} height={90} asset={checksvg} />
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
  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
});
