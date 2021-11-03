import React from "react";
import {
  Alert,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";

import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function user_edit({ navigation }) {
  const createTwoButtonAlert = () =>
    Alert.alert("프로필을 삭제할까요?", "", [
      {
        text: "취소",
        style: "cancel",
        onPress: () => {

          //navigation.navigate("user_setting")
        }

      },
      {
        cancelable: true,
        text: "삭제",
        onPress: () => {
          Alert.alert("삭제되었습니다.");
          navigation.navigate("TabNavigation");
        },
      },
    ]);
  return (
    <View style={styles.finalView}>
      <View style={styles.menuView}>
        <AntDesign
          name="left"
          size={24}
          color="#808080"
          onPress={() => {
            navigation.navigate("user_setting");
          }}
        />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>환자 정보 편집</Text>
        <View style={styles.margin}></View>
        <Feather
          name="check"
          size={30}
          color="green"
          onPress={() => {
            Alert.alert("저장되었습니다.");
            navigation.navigate("user_setting");
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.firstView}>
          <Ionicons name="md-checkmark-circle" size={110} color="green" />
          <Text style={styles.profile_edit}>프로필 사진 바꾸기</Text>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>환자 이름</Text>
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
            <Text style={styles.text2}>seoul1234</Text>
          </View>
        </View>

        <View style={styles.secondView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>나이</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>77</Text>
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


            <View style={styles.margin}></View>
            <MaterialIcons name="radio-button-on" size={24} color="black" />
            <Text style={styles.text2}> 여</Text>
          </View>
        </View>

        <View style={styles.threeView}>
          <View style={styles.memoView}>
            <Text style={styles.text1}>메모</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.text2}>
              신장 운동 중점{"\n"}약 복용 알림도 필요
            </Text>
          </View>
        </View>
        <View style={styles.marginView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              createTwoButtonAlert();
            }}
          >
            <EvilIcons name="trash" size={50} color="#808080" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default user_edit;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },

  menuView: {
    backgroundColor: '#FFFFFF',
    height : 58,
    flexDirection: 'row',
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20,
    justifyContent: 'flex-start',
    borderBottomWidth:1.8,
    borderColor:'#E5E5E5',

  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    alignItems: 'center',
    color: '#000000',
    justifyContent: 'center',
    fontWeight:"bold",

  },

  firstView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 25,
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
    marginTop: 10,
    height: 80,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
  },

  marginView: {
    // padding:30,
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    margin: 10,
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
    flex: 1,
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
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
  profile_edit: {
    alignItems: "flex-start",
    fontSize: 16,
    color: "#59A60B",
    justifyContent: "center",
  },

  text1: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#000000",
    justifyContent: "center",
  },

  text2: {
    alignItems: "flex-start",
    fontSize: 17,

    color: "#484848",
    justifyContent: "center",
  },
});
