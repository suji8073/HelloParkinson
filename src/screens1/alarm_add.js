import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import plussvg from "../icon/plus.svg";
import nosvg from "../icon/no.svg";
import { WithLocalSvg } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";

function alarm_add({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.pop();
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>나의 운동 알림</Text>
        <View style={styles.margin}></View>
        <AntDesign name="left" size={24} color="#FFFFFF" />
      </View>
      <View style={styles.secondView}>
        <View style={{ margin: "5%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "3%",
              borderColor: "#E0E0E0",
              borderRadius: 6,
              borderWidth: 2,
              marginBottom: "4%",
              backgroundColor: "#ffffff",
              height: "13%",
            }}
          >
            <View
              style={{
                alignItems: "center",
                borderRightWidth: 3,
                borderColor: "#E0E0E0",
                flex: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 23,
                  fontWeight: "bold",
                  color: "#B5B5B5",
                }}
              >
                오 전
              </Text>
            </View>
            <View style={{ flex: 5, alignItems: "center" }}>
              <Text
                style={{ fontSize: 23, fontWeight: "bold", color: "#B5B5B5" }}
              >
                오 후
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "3%",
              borderColor: "#E0E0E0",
              borderRadius: 6,
              borderWidth: 2,
              marginBottom: "4%",
              backgroundColor: "#ffffff",
              height: "15%",
            }}
          >
            <View>
              <Text style={{ fontSize: 39, color: "#B5B5B5" }}>00</Text>
            </View>
            <View>
              <Text style={{ fontSize: 39, color: "#000000" }}>:</Text>
            </View>
            <View>
              <Text style={{ fontSize: 39, color: "#B5B5B5" }}>00</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#ffffff",
              flexDirection: "column",
              borderColor: "#E0E0E0",
              borderRadius: 6,
              borderWidth: 2,
              height: "28%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity>
              <View style={styles.text1View}>
                <Text style={styles.text2}>오늘 하루만 알림</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.margin1}></View>
            <TouchableOpacity>
              <View style={styles.text1View}>
                <Text style={styles.text2}>일주일마다 반복하기</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.margin1}></View>
            <TouchableOpacity>
              <View style={styles.text1View}>
                <Text style={styles.text2}>매일 반복하기</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              padding: "3%",
              marginTop: "3%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}
            >
              <WithLocalSvg width={90} height={90} asset={nosvg} />
            </TouchableOpacity>
            <TouchableOpacity>
              <WithLocalSvg width={90} height={90} asset={plussvg} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default alarm_add;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
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
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
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
  secondView: {
    backgroundColor: "#F8F8F8",
    height: "100%",
  },
  text1View: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  margin1: {
    width: "90%",
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
  },
  text2: {
    fontSize: 23,
    fontWeight: "bold",
    borderColor: "#E0E0E0",
    color: "#B5B5B5",
  },
});
