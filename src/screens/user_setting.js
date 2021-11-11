import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Left, Body,Title } from "react-native";



import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Task from "./task1";

function user_setting({ navigation }) {
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
        <Text style={styles.titleText}>환자 정보</Text>
        <View style={styles.margin}></View>
        <EvilIcons name="star" size={30} color="green" />
      </View>

      <View style={styles.firstView}>
        <Ionicons name="md-checkmark-circle" size={110} color="green" />
        <Text style={styles.user_name}>김옥분</Text>
        <Text style={styles.user_age}>77 / 여</Text>
      </View>
      <View style={styles.secondView}>
        <View style={styles.numberbutton}>
          <TouchableOpacity
            style={styles.group}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("user_edit");
            }}
          >
            <EvilIcons name="pencil" size={50} color="green" />
            <Text style={styles.twotext}> 환자 정보 편집 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.group}
            activeOpacity={0.8}
            onPress={() => {
              //navigation.navigate("");
            }}
          >
            <SimpleLineIcons name="pie-chart" size={35} color="green" />
            <Text style={styles.twotext}> 운동 통계 확인 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.group}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate("user_statistics");
            }}
          >
            <Ionicons name="md-podium" size={35} color="green" />
            <Text style={styles.twotext}> 진도율 확인 </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.threeView}>
        <View style={styles.memoView}>
          <Text style={styles.text2}>메모</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.text2}>
            신장 운동 중점{"\n"}약 복용 알림도 필요
          </Text>
        </View>
      </View>
      <View style={styles.marginView}></View>
    </View>
  );
}

export default user_setting;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,

    backgroundColor: '#FFFFFF',
    
  },

  menuView: {
    marginTop:30,
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

  titleText:{
    alignItems:'flex-start',
    fontSize: 20,
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
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  numberbutton: {
    marginLeft: 3,
    marginRight: 3,
    width: "100%",
    height: 45,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  twotext: {
    alignItems: "flex-start",
    fontSize: 15,
    color: "#5CB405",
    marginTop: 10,
    justifyContent: "center",
  },

  group: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  secondView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
  },

  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    marginTop:5,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
    borderColor: "#E5E5E5",
    padding:10,
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
    flex: 1,
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
    color: "#000000",
    justifyContent: "center",
  },

  user_age: {
    alignItems: "flex-start",
    fontSize: 17,
    color: "#747474",
    justifyContent: "center",
  },
});