// progress.js에 들어갈 리스트뷰 모양
import React from "react";
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

import PercentageBar from "./progressbar";
import Svg1 from "../icon/airplane.svg";
import { WithLocalSvg } from "react-native-svg";
const year = 2021 + 1;
const task3 = ({ user, age, sex, progress, minute }) => {
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
          {user} / {year - parseInt(age / 10000)} / {sex}
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
          <View style={{ width: "80%", justifyContent: "center" }}>
            <PercentageBar
              height={20}
              backgroundColor={"#E5E5E5"}
              completedColor={"#7AC819"}
              percentage={progress}
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
            {progress}%
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
        <WithLocalSvg width={40} height={40} asset={Svg1} />
        {/* <Text style={{ marginTop: "5%", color: "#484848", fontSize: 13 }}>
          {minute}분 전
        </Text> */}
      </View>
    </View>
  );
};

export default task3;
