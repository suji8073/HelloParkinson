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
import Task from "./alarm_task";
import ActionButton from "react-native-action-button";

function patient_alarm({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>나의 운동 알림</Text>
        <View style={styles.margin}></View>
      </View>
      <ScrollView style={{ padding: "5%" }}>
        <Task apm="오전" hour="09" minute="30" cycle="일주일마다 반복"></Task>
        <Task apm="오후" hour="12" minute="10" cycle="매일 반복"></Task>
        <Task apm="오후" hour="05" minute="30" cycle="오늘 하루만"></Task>
        {/* <Task apm="오후" hour="09" minute="30" cycle="일주일마다 반복"></Task>
        <Task apm="오후" hour="05" minute="30" cycle="오늘 하루만"></Task>
        <Task apm="오후" hour="09" minute="30" cycle="일주일마다 반복"></Task> */}
        <ActionButton
          bgColor="rgba(0,0,0,1)"
          buttonColor="rgba(68,110,26,1)"
          onPress={() => {
            navigation.navigate("alarm_add");
          }}
        ></ActionButton>
      </ScrollView>
    </View>
  );
}

export default patient_alarm;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#F8F8F8",
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
});
