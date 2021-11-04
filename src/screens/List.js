import React from "react";
import {
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from "react-native";
import SearchBar from "./SearchBar";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Task from "./task1";

function list({ navigation }) {
  return (
    <View style={styles.finalView}>
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

      <View style={styles.threeView}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("user_setting");
            }}
          >
            <Task text1="정산철" text2="64" text3="남" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("user_setting");
            }}
          >
            <Task text1="김인자" text2="69" text3="여" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("user_setting");
            }}
          >
            <Task text1="김옥분" text2="77" text3="여" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

export default list;

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
    marginTop:30,
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
    marginTop: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
});
