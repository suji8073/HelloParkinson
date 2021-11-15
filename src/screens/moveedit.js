// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
import React from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Movelist from "./movelist";
function progress({ navigation }) {
  return (
    <View>
      {/* 헤더 뷰 */}
      <View>
        <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
        <View style={styles.menuView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("user_progress");
            }}
          >
            <AntDesign name="left" size={24} color="#808080" />
          </TouchableOpacity>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>운동 목록</Text>
          <View style={styles.margin}></View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("addmove");
            }}
          >
            <Entypo name="plus" size={30} color="#5CB405" />
          </TouchableOpacity>
        </View>
        {/* < , +아이콘 추가하기 ~ */}
      </View>
      {/* 운동카테고리 목록 뷰 */}
      <View></View>

      {/* 리스트 뷰 전체 뷰 */}
      <ScrollView>
        <Movelist movename="목 앞 근육 스트레칭" moveminute="5" movesec="30" />
        <Movelist movename="목 날개뼈 모으기" moveminute="1" movesec="30" />
        <Movelist
          movename="손목 및 팔꿈치 근육 스트레칭"
          moveminute="4"
          movesec="50"
        />
      </ScrollView>
    </View>
  );
}

export default progress;
const styles = StyleSheet.create({
  menuView: {
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
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
