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

import PercentageBar from "../screens/progressbar";

const task_patient = ({ allcount, done, progress }) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop:10,
        height: 20,
        width: "92%",
        justifyContent: "space-between",
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {done+"/"+allcount}
      </Text>
    </View>
  );
};

export default task_patient;
