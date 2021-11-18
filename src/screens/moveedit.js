// 운동 편집 화면
// 운동카테고리 스크롤뷰와 운동 리스트뷰
import React, { Component } from "react";
import {
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Movelist from "./movelist";
export default class progress extends Component {
  constructor(props) {
    super(props);
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
              this.props.navigation.pop();
            }}
          />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>김옥분님 운동편집</Text>
          <View style={styles.margin}></View>
          <AntDesign
            name="check"
            size={24}
            color="#5CB405"
            onPress={() => {
              Alert.alert("저장되었습니다.");
              this.props.navigation.pop();
            }}
          />
        </View>
        {/* 운동카테고리 목록 뷰 */}
        <View style={{ flexDirection: "column" }}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "row",
              marginRight: 200,
            }}
          >
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>확정리스트</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>신장</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>근력</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>균형/협응</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>구강/발성</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.moveView}>
                <Text style={styles.movebtn}>유산소</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View>
          {/* 리스트 뷰 전체 뷰 */}
          <ScrollView>
            <Movelist
              movename="목 앞 근육 스트레칭"
              moveminute="5"
              movesec="30"
            />
            <Movelist movename="목 날개뼈 모으기" moveminute="1" movesec="30" />
            <Movelist
              movename="손목 및 팔꿈치 근육 스트레칭"
              moveminute="4"
              movesec="50"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#FFFFFF",
  },
  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
  movebtn: { color: "#FFFFFF", justifyContent: "flex-end" },
  moveView: {
    borderColor: "#BBBBBB",
    borderRadius: 35,
    backgroundColor: "#BBBBBB",
    paddingHorizontal: 5,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "5%",
    marginVertical: 5,
  },
});
