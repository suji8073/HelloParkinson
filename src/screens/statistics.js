import React, { Component } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import SearchBar from "./SearchBar";
import OptionsMenu from "react-native-option-menu";

import { Entypo } from "@expo/vector-icons";
import Task from "./task2";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "abc", label: "가나다순" },
  { id: "age", label: "나이순" },
];
export default class statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.userfunc();
  }
  userfunc = () => {
    fetch("http://152.70.233.113/chamuser?sort=name", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ data: json });
      });
  };

  onMenuPress = (id) => {
    if (id === "age") {
      // 진도율순 "http://152.70.233.113/chamuser?sort=age",
      fetch({
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ data: json });
        });
      return this.state.data;
    } else if (id === "abc") {
      // 가나다순
      fetch("http://152.70.233.113/chamuser?sort=name", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ data: json });
        });
      return this.state.data;
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

        <View style={styles.menuView}>
          <Entypo name="dots-three-vertical" size={24} color="#ffffff" />
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 통계 관리</Text>
          <View style={styles.margin}></View>
          <SimplePopupMenu
            items={items}
            cancelLabel={"취소"}
            onSelect={(items) => {
              this.onMenuPress(items.id);
            }}
            onCancel={() => console.log("onCancel")}
          >
            <Entypo name="dots-three-vertical" size={24} color="#595959" />
          </SimplePopupMenu>
        </View>

        <View style={styles.secondView}>
          <SearchBar />
        </View>

        <View style={styles.threeView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("user_statistics", {
                      paramName1: item.id,
                    });
                  }}
                >
                  <Task
                    user={item.name}
                    age={item.birth}
                    sex={item.gender}
                  ></Task>
                </TouchableOpacity>
              );
            }}
          />
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
    marginBottom: 240,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
});
