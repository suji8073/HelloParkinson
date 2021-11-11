// progress.js에 들어갈 리스트뷰 모양
import React from "react";
// import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";

import PercentageBar from "./progressbar";
const task3 = ({ name, age, sex, progress, minute }) => {
  return (
    //  전체 뷰
    <View
      style={{
        borderRadius: 15,
        borderColor: "#EBEBEB",
        borderWidth: 2,
        margin: "3%",
        height: 70,
        width: "94%",
        flexDirection: "row",
      }}
    >
      {/* 사용자와 그래프 뷰 , 숫자*/}
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          flex: 1,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 17 }}>
          {name} / {age} / {sex}
        </Text>

        {/* 그래프와 숫자 뷰 */}
        <View
          style={{
            alignItems: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{ width: "80%", justifyContent: "center" }}
          >
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
              marginLeft: 0.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {progress}
          </Text>
        </View>
      </View>
      {/* 아이콘, 시간 */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          flex: 0.3,
          marginTop: 10,
          marginBottom: 10,
          height: "100%",
        }}
      >
        <Ionicons name="person-circle-sharp" size={30} color="lightblue" />
        <Text style={{ color: "#484848", fontSize: 13 }}>{minute}분 전</Text>
      </View>
    </View>
  );
};

// task3_1.PropTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.string.isRequired,
//   sex: PropTypes.string.isRequired,
//   progress: PropTypes.string.isRequired,
//   minute: PropTypes.string.isRequired,
// };

export default task3;
