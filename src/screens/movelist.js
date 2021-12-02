// 운동 편집 리스트뷰의 생김새
import React, { Component } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";

import plus from "../icon/plusbox.svg";
import minus from "../icon/minusbox.svg";

export default class movelist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      m_num: 3,
      check: false,
    };
  }

  plus_func = () => {
    this.setState({ m_num: this.state.m_num + 1 });
  };

  minus_func = () => {
    if (this.state.m_num > 0) {
      this.setState({ m_num: this.state.m_num - 1 });
    }
  };

  render() {
    return (
      <View style={styles.borderView}>
        <View style={styles.textView}>
          <Text style={{ fontWeight: "bold", fontSize: 14 }}>
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
              <WithLocalSvg width={35} height={35} asset={minus} />
            </TouchableOpacity>

            <View style={styles.numView}>
              <Text style={styles.numstyle}>{this.state.m_num}</Text>
            </View>

            <TouchableOpacity onPress={this.plus_func}>
              <WithLocalSvg width={35} height={35} asset={plus} />
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
