import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Left,
  Body,
  TextInput,
} from "react-native";

import Context from "../Context/context";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export default class patient_profile extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      birth: 20001010,
      gender: "",
      memo: "",
      team: "",
      name: "",
      UID: "",
      progress: "",
    };
  }

  componentDidMount() {
    fetch("http://152.70.233.113/chamuser/uid/" + this.context.user_id, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          birth: json.info.birth,
          gender: json.info.gender,
          memo: json.info.memo,
          team: json.info.team,
          name: json.info.name,
          UID: json.info.UID,
          progress: json.info.progress,
        });
      });
  }
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <AntDesign
            name="left"
            size={24}
            color="#808080"
            onPress={() => {
              this.props.navigation.navigate("TabNavigation1");
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>프로필</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
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
            <Text style={styles.text2}>{this.state.name}</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>아이디</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.UID}</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>비밀번호</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.context.user_pw}</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>생년월일</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>
              {parseInt(this.state.birth / 10000)}-
              {String(this.state.birth).substring(4, 6)}-
              {String(this.state.birth).substring(6, 8)}
            </Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>성별</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>{this.state.gender}</Text>
          </View>
        </View>

        <View style={styles.threeView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("patient_profile_edit");
            }}
          >
            <Text style={styles.user_name}>정보 수정하기</Text>
          </TouchableOpacity>
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
    color: "#484848",
    justifyContent: "center",
  },

  menuView: {
    marginTop: "3%",
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

  threeView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#E5E5E5",
    paddingLeft: 20,
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
    color: "#59A60B",
    fontWeight: "bold",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});
