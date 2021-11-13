import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Left,
  Body,
  TextInput,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

function patient_profile_edit({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <EvilIcons name="star" size={30} color="#ffffff" />

        <View style={styles.margin}></View>
        <Text style={styles.titleText}>프로필</Text>
        <View style={styles.margin}></View>
        <AntDesign
          name="check"
          size={24}
          color="#5CB405"
          onPress={() => {
            Alert.alert("저장되었습니다.");
            navigation.navigate("patient_profile");
          }}
        />
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
          <TextInput
            style={styles.text2}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="김옥분"
          />
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>아이디</Text>
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.text2}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="seoul1243"
          />
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>비밀번호</Text>
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.text2}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="(미입력시 기존 비밀번호 유지)"
          />
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>비밀번호 재확인</Text>
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.text2}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="(미입력시 기존 비밀번호 유지)"
          />
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>생년월일</Text>
        </View>
        <View style={styles.textView}>
          <TextInput
            style={styles.text2}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="1945-03-21"
          />
        </View>
      </View>

      <View style={styles.secondView}>
        <View style={styles.memoView}>
          <Text style={styles.text1}>성별</Text>
        </View>
        <View style={styles.ageview}>
          <MaterialIcons name="radio-button-on" size={24} color="black" />
          <Text style={styles.text2}> 남</Text>

          <View style={styles.margin}></View>
          <MaterialIcons name="radio-button-on" size={24} color="black" />
          <Text style={styles.text2}> 여</Text>
          <View style={styles.margin}></View>
        </View>
      </View>
      <View style={styles.marginView}></View>
    </View>
  );
}

export default patient_profile_edit;

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
    flex: 2,
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
    fontSize: 21,
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
    justifyContent: "center",
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderColor: "#E5E5E5",
    padding: 10,
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
