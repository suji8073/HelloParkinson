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
        borderColor: "#E5E5E5",
        borderWidth: 2,
        paddingTop: 5,
        margin: 5,
        flexDirection: "row",
      }}
    >
      {/* 사용자와 그래프 뷰 , 숫자*/}
      <View style={{ flexDirection: "column", flex: 0.7, margin: 10 }}>
        <Text style={{ fontSize: 20 }}>
          {name} / {age} / {sex}
        </Text>
        {/* 그래프와 숫자 뷰 */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <PercentageBar
            style={{ flex: 0.8 }}
            height={20}
            backgroundColor={"#E5E5E5"}
            completedColor={"#7AC819"}
            percentage={90}
          />
          <Text style={{ fontSize: 20, flex: 0.2 }}>{progress}%</Text>
        </View>
      </View>
      {/* 아이콘, 시간 */}
      <View
        style={{ flexDirection: "column", alignItems: "center", flex: 0.3 }}
      >
        <Ionicons name="person-circle-sharp" size={50} color="lightblue" />
        <Text>{minute}분 전</Text>
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
