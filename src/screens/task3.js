// progress.js에 들어갈 리스트뷰 모양
import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  Text,
  ScrollView,
} from "react-native";

import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";
import PercentageBar from "./progressbar";
import airplane from "../icon/airplane.svg";
import greenairplane from "../icon/greenairplane.svg";
import { WithLocalSvg } from "react-native-svg";
const year = 2021 + 1;
export default class task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarm: airplane,
    };
  }

  handleClick = () => {
    if (this.state.alarm === airplane) {
      this.setState({ alarm: greenairplane });
    } else {
      this.setState({ alarm: airplane });
    }
  };
  render() {
    return (
      //  전체 뷰
      <View
        style={{
          borderRadius: 15,
          borderColor: "#EBEBEB",
          borderWidth: 2,
          margin: "3%",
          height: 100,
          width: "94%",
          flexDirection: "row",
        }}
      >
        {/* 사용자와 그래프 뷰 , 숫자*/}
        <View
          style={{
            width: "90%",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            flex: 1,
            margin: "5%",
          }}
        >
          <Text style={{ fontSize: 17 }}>
            {this.props.user} / {year - parseInt(this.props.age / 10000)} /{" "}
            {this.props.sex}
          </Text>

          {/* 그래프와 숫자 뷰 */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "3%",
            }}
          >
            <View
              style={{
                width: "80%",
                justifyContent: "center",
              }}
            >
              <PercentageBar
                height={20}
                backgroundColor={"#E5E5E5"}
                completedColor={"#7AC819"}
                percentage={this.props.progress}
              />
            </View>

            <Text
              style={{
                color: "#484848",
                fontSize: 16,
                marginLeft: "5%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {this.props.progress}%
            </Text>
          </View>
        </View>
        {/* 아이콘, 시간 */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 0.3,
            height: "100%",
          }}
        >
          <TouchableOpacity onPress={this.handleClick}>
            <WithLocalSvg width={40} height={40} asset={this.state.alarm} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#ebebeb",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    height: 90,
    borderRadius: 10,
    flexDirection: "row",
  },
  full: {
    flexDirection: "row",
  },

  textgroup: {
    alignItems: "flex-start",
    marginLeft: 15,
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  textgroup1: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 5,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },

  subtext: {
    alignItems: "flex-start",
    fontSize: 14,
    alignItems: "center",
    color: "#747474",
    justifyContent: "center",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
