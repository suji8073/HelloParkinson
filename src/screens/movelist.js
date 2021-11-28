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
      on_off: ON,
      m_num: 0,
    };
  }

  render() {
    return (
      //   스몰리스트 뷰
      <View style={styles.finallist}>
        {/* 운동이름, 운동시간 */}
        <Text>{this.props.name}</Text>

        {/* 아이콘 뷰 */}

        <TouchableOpacity onPress={this.setState({ m_num: m_num + 1 })}>
          <WithLocalSvg width={25} height={25} asset={plus} />
        </TouchableOpacity>
        <Text>m_num</Text>
        <TouchableOpacity onPress={this.setState({ m_num: m_num - 1 })}>
          <WithLocalSvg width={25} height={25} asset={minus} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  finallist: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E5E5E5",
    borderBottomWidth: 1,
  },
  moveinfoView: {
    flex: 0.9,
    paddingLeft: 15,
    margin: 15,
    flexDirection: "column",
  },
  iconView: {
    flex: 0.1,
    alignItems: "center",
  },
});
