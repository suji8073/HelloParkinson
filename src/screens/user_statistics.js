import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Task from "../screens1/task_record_day";

function user_statistics({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("TabNavigation");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>'김옥분'님 의 운동 통계</Text>
        <View style={styles.margin}></View>
        <Entypo name="dots-three-vertical" size={24} color="#595959" />
      </View>

      <View style={styles.mainView}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.firstView}>
            <Text style={styles.user_name}>김옥분</Text>
            <Text style={styles.user_age}>/77세</Text>
            <Text style={styles.user_sex}>/여</Text>
            <View style={styles.margin}></View>
            <MaterialCommunityIcons
              name="google-spreadsheet"
              size={30}
              color="#0F9D58"
            />
          </View>

          <View style={styles.secondView}>
            <View style={styles.textview}>
              <Text style={styles.text1}>주 평균</Text>
              <Text style={styles.text2}>66.4%</Text>
              <View style={styles.margin}></View>
              <Text style={styles.text3}>2021년 1월 31일 ~ 2월 6일</Text>
            </View>

            <View style={styles.graphview}></View>
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

export default user_statistics;
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
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "5%",
    marginRight: "5%",
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
  },
  user_name: {
    alignItems: "flex-start",
    justifyContent: "center",
    color: "#484848",
    fontSize: 21,
    fontWeight: "bold",
  },

  user_age: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },

  user_sex: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    fontSize: 17,
    color: "#484848",
  },
  mainView: {
    backgroundColor: "#F8F8F8",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  secondView: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "3%",
    marginBottom: "5%",
    padding: "5%",
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
    marginBottom: "5%",
    justifyContent: "flex-start",
    alignItems:"center",
    flexDirection: "row",
  },
  graphview: {
    flex: 3,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text2: {
    marginLeft: "1%",
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: "center",
    color: "#484848",
    justifyContent: "center",
    fontWeight: "bold",
  },
  text3: {
    alignItems: "center",
    fontSize: 15,
    alignItems: "center",
    color: "#484848",
    justifyContent: "flex-end",
    fontWeight: "bold",
  },
});
