import React, { Component } from "react";

import { TouchableOpacity, StyleSheet, View, Text, Alert } from "react-native";
import PercentageBar from "./progressbar";
import airplane from "../icon/airplane.svg";
import greenairplane from "../icon/greenairplane.svg";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { WithLocalSvg } from "react-native-svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";

export default class task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarm: greenairplane,
      date: new Date(),
      nowtimestamp: 0,
      sendtimestamp: 0,
      minute: 0,
      final_minute: 0,
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
          this.state.date.getHours() * 100 +
          this.state.date.getMinutes(),
      },
      () => {
        if (
          this.props.minute == 0 ||
          this.state.nowtimestamp - this.props.minute > 15
        ) {
          this.setState({
            alarm: greenairplane,
          });
        } else {
          this.setState({
            alarm: airplane,
          });
        }
        this.setState({
          final_minute:
            this.props.minute == 0 ||
            this.state.nowtimestamp - this.props.minute > 15
              ? "*"
              : this.state.nowtimestamp - this.props.minute,
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
        this.state.date.getHours() * 100 +
        this.state.date.getMinutes(),
    });
  };
  nowtimes = () => {
    this.setState({
      nowtimestamp:
        this.state.date.getFullYear() * 100000000 +
        (this.state.date.getMonth() + 1) * 1000000 +
        this.state.date.getDate() * 10000 +
        this.state.date.getHours() * 100 +
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
        this.setState(
          {
            sendtimestamp: this.state.timestamp,
          },
          () => {
            this.setState({
              final_minute: this.state.nowtimestamp - this.state.sendtimestamp,
            });
          }
        );
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
          marginLeft: responsiveScreenWidth(4.7),
          marginRight: responsiveScreenWidth(4.7),
          marginBottom: responsiveScreenHeight(2),
          height: responsiveScreenHeight(10.6),
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: responsiveWidth(5.8),
          paddingLeft: responsiveWidth(4),
        }}
      >
        {/* 사용자와 그래프 뷰 , 숫자*/}
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              fontSize: responsiveScreenFontSize(2),
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
              marginTop: responsiveHeight(0.5),
            }}
          >
            <View
              style={{
                width: responsiveScreenWidth(52.8),
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
                marginLeft: responsiveScreenWidth(1.6),
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
                ? styles.timetextsilver
                : styles.timetextgreen
            }
          >
            {this.state.final_minute}분 전
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  timetextgreen: {
    color: "#FFFFFF",
    fontSize: responsiveScreenFontSize(1.4),
  },
  timetextsilver: {
    color: "#000000",
    fontSize: responsiveScreenFontSize(1.4),
  },
});
