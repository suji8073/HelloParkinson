import React from "react";
import {
  Button,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import SearchBar from "./SearchBar";

import { Entypo } from "@expo/vector-icons";

function statistics({ navigation }) {
  return (
    <View style={styles.finalView}>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />

      <View style={styles.menuView}>
        <Entypo name="dots-three-vertical" size={24} color="#ffffff" />
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>환자 목록</Text>
        <View style={styles.margin}></View>
        <Entypo name="dots-three-vertical" size={24} color="#595959" />
      </View>

      <View style={styles.secondView}>
        <SearchBar />
      </View>

      <View style={styles.threeview}>
        <ScrollView></ScrollView>
        {/* <TouchableOpacity onPress={() => {navigation.navigate("user_statistics")}} >
        <Text>김옥분님 통계 화면으로 이동하기 클릭!</Text>
      </TouchableOpacity> */}
      </View>
    </View>
  );
}

export default statistics;

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
  secondView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
    height: 40,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },
  threeView: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    height: 500,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
});
