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
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGFtIiwiUm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6IkhDQyBMYWIiLCJpYXQiOjE2NDQwNjU1MzYsImV4cCI6MTY0NDY3MDMzNn0.mnbGyKlMHvwdVFQJRPmgTxMGB966ITczMTA_p4E4lWSRb2DYoOlwW1mrPGapPRkf6h4hyZIIUgfrs1yIqInOJg"
);

export default class move_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data_length: 0,
    };
  }
  componentDidMount() {
    this.cat_list();
  }

  storeData = async (list) => {
    try {
      await AsyncStorage.setItem("@move_play", JSON.stringify(list));
    } catch (e) {
      console.log(e);
      console.log("error");
    }
  };

  cat_list = () => {
    fetch(
      "http://hccparkinson.duckdns.org:19737/progress/personal/exercise?cat=0",
      {
        method: "GET",
        headers: myHeaders,
      }
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json.data, data_length: json.data.length });
        AsyncStorage.setItem("@move_play", JSON.stringify(json.data));
      });
  };

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
          <Text style={styles.titleText}>신장운동</Text>
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
              data={this.state.data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      this.props.navigation.push("move_play", {
                        eid: item.eid,
                        ename: item.ename,
                        cat_name: 1,
                        done_num: item.donecnt,
                        assign_num: item.setcnt,
                      });
                    }}
                  >
                    <Task
                      image={item.eid}
                      text1={item.ename}
                      text2={item.donecnt}
                      text3={item.setcnt}
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
