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

const task_patient = ({}) => {
  return (
    //  전체 뷰
    <View
      style={{
        alignItems: "flex-start",
        flexDirection: "column",
        height: 200,
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Text style={styles.text1}>2월 6일</Text>
      <View style={styles.graphView}></View>
    </View>
  );
};

export default task_patient;
const styles = StyleSheet.create({
  text1: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  graphView: {
    flex: 3,
    marginTop:"5%",
    marginBottom:"5%",
    width:"100%%",
    borderWidth: 1,
    borderColor:"#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
