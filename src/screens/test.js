//App.js
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { WithLocalSvg } from "react-native-svg";

import plus from "../icon/plusbox.svg";
import minus from "../icon/minusbox.svg";
import React, { Component } from "react";
import "react-native-gesture-handler";
export default class test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <View>
          <View style={{ margin: "10%" }}></View>
          {/* 이 아래부터 ~~ */}
          <View style={styles.borderView}>
            <View style={styles.textView}>
              <Text
                style={{ lineHeight: 30, fontWeight: "bold", fontSize: 17 }}
              >
                목 앞 근육 스트레칭
              </Text>
              <Text style={{ fontSize: 16 }}>3분 00초</Text>
            </View>
            <View style={styles.btnView}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity>
                  <WithLocalSvg width={35} height={35} asset={plus} />
                </TouchableOpacity>
                <View style={styles.numView}>
                  <Text style={styles.numstyle}>5</Text>
                </View>
                <TouchableOpacity>
                  <WithLocalSvg width={35} height={35} asset={minus} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* 이 아래부터 ~ */}
        {/* <View style */}
        <View
          style={{
            flexDirection: "row",
            paddingVertical: "4%",
            paddingHorizontal: "3%",
            borderBottomWidth: 1,
            borderColor: "#E4E4E4",
          }}
        >
          <View
            style={{ flex: 0.4, justifyContent: "center", paddingLeft: "2%" }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>걷기</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 0.6,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "#DCDCDC",
                paddingHorizontal: "10%",
                paddingVertical: "3%",
                color: "#000000",
                fontSize: 16,
              }}
              placeholder="0"
            ></TextInput>
            <Text style={{ fontSize: 16, color: "#757575" }}>시간</Text>

            <TextInput
              style={{
                borderWidth: 2,
                borderColor: "#DCDCDC",
                paddingHorizontal: "10%",
                paddingVertical: "3%",
                color: "#000000",
                fontSize: 16,
              }}
              placeholder="0"
            ></TextInput>
            <Text style={{ fontSize: 16, color: "#757575" }}>분</Text>
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
    paddingBottom: "4%",
  },
  textView: {
    flex: 0.6,
    paddingHorizontal: "6%",
    flexDirection: "column",
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
