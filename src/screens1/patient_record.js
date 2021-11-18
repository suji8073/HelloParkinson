import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Task from "./task_record_day";
import Task1 from "./task_graph";

function patient_record({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>나의 운동 기록</Text>
        <View style={styles.margin}></View>
      </View>

      <View style={styles.mainView}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.secondView}>
            <View style={styles.textview}>
              <Text style={styles.text1}>2021년 1월 31일 ~ 2월 6일</Text>
              <Text style={styles.text2}>주 평균 66.4%</Text>
            </View>

            <View style={styles.graphview}>
              <Task1></Task1>
            </View>
          </View>

          <View style={styles.threeView}>
            <Task></Task>
            <Task></Task>
            <Task></Task>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default patient_record;
const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "10%",
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  mainView: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 180,
  },
  secondView: {
    margin: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    width: "90%",
    height: 200,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  threeView: {
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    padding: "5%",
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  moveView: {
    backgroundColor: "#FFFFFF",
    height: 90,
    width: "92%",
    marginLeft: "4%",
    marginRight: "4%",
    marginTop: "3%",
    marginBottom: "3%",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
  },
  textview: {
    flex: 1,
    marginTop:"5%",
    marginBottom: "3%",
    justifyContent: "center",
  },
  graphview: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    alignItems: "flex-start",
    marginTop: 8,
    fontSize: 21,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
