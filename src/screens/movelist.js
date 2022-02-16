// 운동 편집 리스트뷰의 생김새
import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Context from "../Context/context";
import plus from "../icon/plusbox.svg";
import minus from "../icon/minusbox.svg";
import plussilver from "../icon/plussilverbox.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import minussilver from "../icon/minussilverbox.svg";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const storeData = async (moveset) => {
  try {
    await AsyncStorage.setItem("@user_moveset", JSON.stringify(moveset));
    console.log("moveset_clear");

    console.log(await AsyncStorage.getItem("@user_moveset"));
  } catch (e) {
    // saving error
    console.log("moveset_error");
  }
};
export default class movelist extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      m_num: this.props.m_num,
      check: false,
      user_moveset: [],
    };
  }
  move_edit = () => {
    var move_lists = JSON.parse(this.state.user_moveset);

    move_lists.filter((x, y) => {
      if (x.eid === this.props.eid) {
        x.setcnt = this.state.m_num;
      }
    });
    storeData(move_lists);
  };

  plus_func = () => {
    this.setState({ m_num: this.state.m_num + 1 }, () => {
      this.move_edit();
    });
  };

  minus_func = () => {
    if (this.state.m_num > 0) {
      this.setState({ m_num: this.state.m_num - 1 }, () => {
        this.move_edit();
      });
    }
  };
  async componentDidMount() {
    console.log(this.props.m_num);
    const user_movelist = await AsyncStorage.getItem("@user_moveset");
    this.setState({ user_moveset: user_movelist });
  }
  render() {
    return (
      <View style={styles.borderView}>
        <View style={styles.textView}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: responsiveScreenFontSize(1.64),
            }}
          >
            {this.props.name}
          </Text>
        </View>

        <View style={styles.btnView}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity onPress={this.minus_func}>
              <WithLocalSvg
                width={responsiveScreenWidth(9.7)}
                height={responsiveScreenWidth(9.7)}
                asset={this.state.m_num == 0 ? minussilver : minus}
              />
            </TouchableOpacity>

            <View
              style={
                this.state.m_num == 0 ? styles.numViewsilver : styles.numView
              }
            >
              <Text style={styles.numstyle}>{this.state.m_num}</Text>
            </View>

            <TouchableOpacity onPress={this.plus_func}>
              <WithLocalSvg
                width={responsiveScreenWidth(9.7)}
                height={responsiveScreenWidth(9.7)}
                asset={this.state.m_num == 0 ? plussilver : plus}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderView: {
    flexDirection: "row",
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    height: responsiveScreenHeight(10.4),
    justifyContent: "space-between",
  },
  textView: {
    marginLeft: responsiveScreenWidth(5.8),
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  btnView: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: responsiveScreenWidth(5.8),
  },
  numView: {
    width: responsiveScreenWidth(9.7),
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#5CB405",
    borderBottomColor: "#5CB405",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  numViewsilver: {
    width: responsiveScreenWidth(9.7),
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#BBBBBB",
    borderBottomColor: "#BBBBBB",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  numstyle: { alignContent: "stretch", alignItems: "stretch" },
});
