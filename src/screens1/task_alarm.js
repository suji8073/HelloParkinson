import React, { Component } from "react";
import { TouchableOpacity, View, Text, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


//const alarm_task = ({ navigation, apm, hour, minute, check }) => {

const storeData = async (array) => {
  console.log(array);
  try {
    await AsyncStorage.mergeItem("@alarm", JSON.stringify(array));
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export default class alarm_task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarm_check: 0,
      alarm_array: [],
    };
  }

  async componentDidMount() {
    this.setState({ alarm_check: this.props.check });
    console.log("check" + this.props.check);
    try {
      const alarm_array = await AsyncStorage.getItem("@alarm");

      if (alarm_array !== null) {
        this.setState({ alarm_array: JSON.parse(alarm_array) });
      }
    } catch (e) {
      console.log("불러와지는 error");
    }
  }

  handleClick = () => {
    console.log(this.props.index);
    console.log(this.state.alarm_check);
    console.log("-----------------");
    if (this.state.alarm_check === 0) {
      // 비활성화에서 활성화로
      console.log("여기냐!");
      var change_array = this.state.alarm_array;
      change_array.filter((x, y) => {
        if (y === this.props.index) x.check = 1;
      });
      this.setState({
        alarm_check: 1,
        alarm_array: change_array,
      });
      storeData(change_array);
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
      storeData(change_array);
    }
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          borderRadius: 6,
          borderWidth: 2,
          marginTop: 25,
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
              fontSize: 28,
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
            style={{ transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }}
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
