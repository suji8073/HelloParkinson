import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Task from "./task_move";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const data = [
  { name: "한발 서기", category: "2-1", a: 1, b: 2 },
  { name: "버드독 1단계", category: "2-2", a: 2, b: 6 },
  { name: "버드독 2단계", category: "2-3", a: 0, b: 5 },
  { name: "앉은 상태에서 제자리 걷기", category: "2-4", a: 4, b: 4 },
  { name: "움직이는 런지", category: "2-5", a: 1, b: 3 },
];

export default class move_3 extends Component {
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
          <Text style={styles.titleText}>균형 협응 운동</Text>
          <View style={styles.margin}></View>
          <EvilIcons name="star" size={30} color="#ffffff" />
        </View>

        <View style={styles.secondView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FlatList
              keyExtractor={(item, index) => index}
              data={data}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.props.navigation.push("move_play", {
                        paramName1: item.category,
                        paramName2: "균형 협응 운동",
                        done_num: item.a,
                        assign_num: item.b,
                      });
                    }}
                  >
                    <Task
                      image={item.category}
                      text1={item.name}
                      text2={item.a}
                      text3={item.b}
                    ></Task>
                  </TouchableOpacity>
                );
              }}
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
    margin: 15,
    backgroundColor: "#FFFFFF",
  },

  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: "30%",
  },

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
