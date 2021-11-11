import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Left,
  Body,
  TextInput,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

function patient_profile({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("TabNavigation1");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>프로필</Text>
        <View style={styles.margin}></View>
        <EvilIcons name="star" size={30} color="#ffffff" />
      </View>

      <View style={styles.firstView}>
        <Ionicons name="md-checkmark-circle" size={110} color="green" />
        <Text style={styles.user_name}>프로필 사진 변경</Text>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>이름</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>김옥분</Text>
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>아이디</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>seoul1243</Text>
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>비밀번호</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>***********</Text>
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>생년월일</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>1945-03-21</Text>
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>성별</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>여</Text>
        </View>
      </View>

      <View style={styles.threeView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("patient_profile_edit");
          }}
        >
          <Text style={styles.user_name}>비밀번호 변경하기</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.marginView}></View>
    </View>
  );
}

export default patient_profile;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#000000",
    justifyContent: "center",
  },
  ageview: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    flex: 1,
    marginRight: 15,
  },

  menuView: {
    marginTop: "10%",
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "flex-start",
    borderBottomWidth: 1.8,
    borderColor: "#E5E5E5",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
    fontWeight: "bold",
  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
    height: 40,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#FFFFFF",
  },

  marginView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 2,
    backgroundColor: "#FFFFFF",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },

  memoView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
    flex: 1,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    flex: 2,
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,

    color: "#484848",
    justifyContent: "center",
  },

  user_name: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#59A60B",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});
