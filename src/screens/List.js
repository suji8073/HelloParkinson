import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import SearchBar from "./SearchBar";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Task from "./task1";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "abc", label: "가나다순" },
  { id: "star", label: "즐겨찾기순" },
];
const DATA = [
  {
    id: "1",
    user: "박규동",
    age: "5",
    sex: "여",
    progress: "50%",
    minute: "5",
    completed: false,
  },
  {
    id: "2",
    user: "채수지",
    age: "5",
    sex: "여",
    progress: "50%",
    minute: "5",
    completed: false,
  },
  {
    id: "3",
    user: "기매현",
    age: "5",
    sex: "여",
    progress: "50%",
    minute: "5",
    completed: false,
  },
  {
    id: "4",
    user: "김해년",
    age: "5",
    sex: "여",
    progress: "50%",
    minute: "5",
    completed: false,
  },
  {
    id: "5",
    user: "십누딩",
    age: "5",
    sex: "여",
    progress: "50%",
    minute: "5",
    completed: false,
  },
];

export default class list extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.finalView}>
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 목록</Text>
          <SimplePopupMenu
            style={styles.margin}
            items={items}
            cancelLabel={"취소"}
            //onSelect={() => alert(this.label)}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo name="dots-three-vertical" size={24} color="#595959" />
          </SimplePopupMenu>
        </View>

        <View style={styles.secondView}>
          <SearchBar />
        </View>

        <View style={styles.threeView}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FlatList
              data={DATA}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("user_setting");
                    }}
                  >
                    <Task user={item.user} age={item.age} sex={item.sex}></Task>
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
  menustyle: {
    fontSize: 20,
    alignItems: "flex-end",
    color: "#000000",
    justifyContent: "flex-end",
    fontWeight: "bold",
    width: 100,
    borderWidth: 1,
  },
  menutext: {
    alignItems: "flex-start",
    fontSize: 20,
    borderWidth: 1,
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
    height: 300,
    alignItems: "flex-end",
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
    marginBottom: 230,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
});
