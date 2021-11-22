import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  Left,
  Body,
  TextInput,
} from "react-native";

import { WithLocalSvg } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import nocheck from "../icon/radio_btn_nocheck.svg";
import check from "../icon/radio_button_check.svg";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class patient_profile_edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onname1: check,
      onname2: nocheck,
      user_pw: "",
      user_pww: "",
    };
  }
  edit_finish = () => {
    if (this.state.user_pw !== this.state.user_pww) {
      Alert.alert("비밀번호가 일치하지 않습니다.");
    } else {
      Alert.alert("저장되었습니다.");
      this.props.navigation.navigate("patient_profile");
    }
  };

  handleClick1 = () => {
    if (this.state.onname1 === nocheck && this.state.onname2 === check) {
      this.setState({ onname1: check, onname2: nocheck });
    } else if (this.state.onname1 === nocheck) {
      this.setState({ onname1: check });
    } else {
      this.setState({ onname1: nocheck });
    }
  };
  handleClick2 = () => {
    if (this.state.onname2 === nocheck && this.state.onname1 === check) {
      this.setState({ onname2: check, onname1: nocheck });
    } else if (this.state.onname2 === nocheck) {
      this.setState({ onname2: check });
    } else {
      this.setState({ onname2: nocheck });
    }
  };

  render() {
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
            onPress={this.edit_finish}
          />
        </View>

        <View style={styles.firstView}>
          <Ionicons
            name="person-circle-sharp"
            size={120}
            color="lightblue"
            alignItems="center"
          />
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
            <TextInput
              style={styles.text2}
              onChangeText={(text) => {
                this.setState({ user_pw: text });
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
                this.setState({ user_pww: text });
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
            <Text style={styles.text2}>1945-03-21</Text>
          </View>
        </View>

        <View style={styles.secondView1}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>성별</Text>
          </View>
          <View style={styles.ageview}>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={this.handleClick1}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.onname1} />
            </TouchableOpacity>

            <Text style={styles.text2}> 남</Text>

            <View style={styles.margin}></View>
            <TouchableOpacity
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              onPress={this.handleClick2}
            >
              <WithLocalSvg width={24} height={24} asset={this.state.onname2} />
            </TouchableOpacity>
            <Text style={styles.text2}> 여</Text>

            <View style={styles.margin}></View>
          </View>
        </View>
        <View style={styles.marginView}></View>
      </View>
    );
  }
}

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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    margin: "10%",
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },
  secondView1: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
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
    marginLeft: "8%",
    flex: 1,
  },

  textView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
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
    fontWeight: "bold",
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
