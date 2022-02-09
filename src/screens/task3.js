import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";

import silverstarsvg from "../icon/silverstar.svg";
import greenstarsvg from "../icon/greenstar.svg";
import PercentageBar from "./progressbar";
import airplane from "../icon/airplane.svg";
import greenairplane from "../icon/greenairplane.svg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { WithLocalSvg } from "react-native-svg";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const year = 2021 + 1;
export default class task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarm: greenairplane,
      date: new Date(),
      nowtimestamp: 0,
      sendtimestamp: 0,
      minute: 0,
    };
  }
  async componentDidMount() {
    const manager_token = await AsyncStorage.getItem("@manager_token");
    this.nowtimes();
    this.setState(
      {
        nowtimestamp:
          this.state.date.getFullYear() * 100000000 +
          (this.state.date.getMonth() + 1) * 1000000 +
          this.state.date.getDate() * 10000 +
          (this.state.date.getHours() + 9) * 100 +
          this.state.date.getMinutes(),
      },
      () => {
        this.setState({
          alarm:
            this.state.nowtimestamp - this.props.minute <= 15
              ? airplane
              : greenairplane,
          minute:
            this.state.nowtimestamp - this.props.minute <= 15
              ? this.props.minute
              : this.state.nowtimestamp,
        });
      }
    );
    this.setState({ man_token: manager_token });
  }

  dateToStr = () => {
    var today_year = new Date().getFullYear();
    var birth_year = String(this.props.age).substring(0, 4);
    return today_year - birth_year + 1;
  };

  sendtimes = () => {
    this.setState({
      sendtimestamp:
        this.state.date.getFullYear() * 100000000 +
        (this.state.date.getMonth() + 1) * 1000000 +
        this.state.date.getDate() * 10000 +
        (this.state.date.getHours() + 9) * 100 +
        this.state.date.getMinutes(),
    });
  };
  nowtimes = () => {
    this.setState({
      nowtimestamp:
        this.state.date.getFullYear() * 100000000 +
        (this.state.date.getMonth() + 1) * 1000000 +
        this.state.date.getDate() * 10000 +
        (this.state.date.getHours() + 9) * 100 +
        this.state.date.getMinutes(),
    });
  };
  handleClick = () => {
    if (this.state.alarm === greenairplane) {
      fetch("http://hccparkinson.duckdns.org:19737/onlymanager/alarm", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.state.man_token.slice(1, -1),
          "Content-Type": "application/json",
        },
        body: String(this.props.id),
      }).then(() => {
        Alert.alert("알림을 전송합니다.");
      });

      this.setState({
        alarm: airplane,
        // 보낸시각
      });

      this.setState({ date: new Date() }, () => {
        this.nowtimes();
        this.sendtimes();
      });
      var refreshIntervalId = setInterval(() => {
        this.setState({ date: new Date() }, () => {
          this.nowtimes();
        });

        if (
          this.state.sendtimestamp !== 0 &&
          this.state.nowtimestamp - this.state.sendtimestamp >= 15
        ) {
          this.setState({
            alarm: greenairplane,
            sendtimestamp: 0,
            nowtimestamp: 0,
          });
          clearInterval(refreshIntervalId);
        }
      }, 60000);
      // 알림 누른 시각과 환자 db로 보냄
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
          marginLeft: "4.7%",
          marginRight: "4.7%",
          marginTop: "2%",
          marginBottom: "2%",
          height: responsiveScreenHeight(10.6),
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingRight: "2%",
        }}
      >
        {/* 사용자와 그래프 뷰 , 숫자*/}
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flex: 1,
            padding: "3%",
            marginLeft: responsiveScreenWidth(3.6),
          }}
        >
          <Text
            style={{
              fontSize: responsiveScreenFontSize(2),
              marginTop: "1%",
            }}
          >
            {this.props.user} / {this.dateToStr()} /{" "}
            {this.props.sex == "M" ? "남" : "여"}성
          </Text>

          {/* 그래프와 숫자 뷰 */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "1.5%",
            }}
          >
            <View
              style={{
                width: "80%",
                justifyContent: "center",
              }}
            >
              <PercentageBar
                height={responsiveScreenHeight(1.4)}
                backgroundColor={"#E5E5E5"}
                completedColor={"#7AC819"}
                percentage={Math.ceil(this.props.progress * 100)}
              />
            </View>

            <Text
              style={{
                color: "#484848",
                fontSize: responsiveScreenFontSize(1.88),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {Math.ceil(this.props.progress * 100)}%
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginRight: "2%",
          }}
          onPress={this.handleClick}
          activeOpacity={1}
        >
          <WithLocalSvg
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            width={responsiveScreenWidth(10)}
            height={responsiveScreenHeight(6)}
            asset={this.state.alarm}
          />
          <Text
            style={
              this.state.alarm == airplane
                ? styles.timetextgreen
                : styles.timetextsilver
            }
          >
            {this.state.nowtimestamp - this.state.minute}분 전
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  timetextgreen: {
    color: "#000000",
    fontSize: responsiveScreenFontSize(1.4),
  },
  timetextsilver: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(1.4),
  },
});
