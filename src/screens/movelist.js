// 운동 편집 리스트뷰의 생김새
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg";

import plus from "../icon/plusbox.svg";
import minus from "../icon/minusbox.svg";

export default class Movelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m_num: 0,
    };
  }
  plus_func = () => {
    this.setState({ m_num: this.state.m_num + 1 });
  };
  minus_func = () => {
    this.setState({ m_num: this.state.m_num - 1 });
  };

  textnum = () => {};
  render() {
    return (
      //   스몰리스트 뷰
      <View>
        {/* 운동이름, 운동시간 */}
        <View style={styles.borderView}>
          <View style={styles.textView}>
            <Text style={{ fontWeight: "bold", fontSize: 14 }}>
              {this.props.name}
            </Text>
            {/* <Text style={{ fontSize: 16 }}>3분 00초</Text> */}
          </View>
          <View style={styles.btnView}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <TouchableOpacity onpress={this.minus_func}>
                <WithLocalSvg width={35} height={35} asset={minus} />
              </TouchableOpacity>
              <View style={styles.numView}>
                <Text style={styles.numstyle}>{this.state.m_num}</Text>
              </View>

              <TouchableOpacity onpress={this.plus_func}>
                <WithLocalSvg width={35} height={35} asset={plus} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* 
        <View>
          <Text>{this.props.name}</Text>
          <View
            style={{
              flexDirection: "row",
              padding: "10%",
              justifyContent: "center",
            }}
          > */}
        {/* <WithLocalSvg width={25} height={25} asset={plus} />
            <View style={{ padding: "10%", justifyContent: "center" }}>
              <Text>{this.state.m_num}</Text>
            </View>
            <WithLocalSvg width={25} height={25} asset={minus} /> */}
        {/* </View>
        </View> */}

        {/* 아이콘 뷰 */}

        {/* <TouchableOpacity onPress={this.setState({ m_num: 3 })}>
          <WithLocalSvg width={25} height={25} asset={plus} />
        </TouchableOpacity>
        <View>
          <Text>{this.state.m_num}</Text>
        </View>
        <TouchableOpacity onPress={this.setState({ m_num: 2 })}>
          <WithLocalSvg width={25} height={25} asset={minus} />
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  borderView: {
    flexDirection: "row",
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    paddingVertical: "5%",
  },
  textView: {
    flex: 0.6,
    paddingHorizontal: "6%",
    flexDirection: "column",
    justifyContent: "center",
  },
  btnView: {
    flex: 0.4,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginRight: "2%",
  },
  numView: {
    paddingHorizontal: "15%",
    justifyContent: "center",
    borderTopColor: "#5CB405",
    borderBottomColor: "#5CB405",
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  numstyle: { alignContent: "stretch", alignItems: "stretch" },
});
