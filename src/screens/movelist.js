// 운동 편집 리스트뷰의 생김새
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg";

import OFF from "../icon/r_btn_off.svg";
import ON from "../icon/r_btn_on.svg";

export default class Movelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on_off: ON,
    };
  }

  Click_icon = () => {
    if (this.state.on_off === ON) {
      this.setState({ on_off: OFF });
    } else {
      this.setState({ on_off: ON });
    }
  };

  render() {
    return (
      //   스몰리스트 뷰
      <View style={styles.finallist}>
        {/* 운동이름, 운동시간 */}
        <View style={styles.moveinfoView}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>
            {this.props.movename}
          </Text>
          <Text style={{ fontSize: 6 - 8 }}>
            {this.props.moveminute}분 {this.props.movesec}초
          </Text>
        </View>

        {/* 아이콘 뷰 */}

        <TouchableOpacity onPress={this.Click_icon}>
          <WithLocalSvg width={25} height={25} asset={this.state.on_off} />
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
