import React, { Component } from "react";
import {
  TextInput,
  StatusBar,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Task from "./task2";
import SimplePopupMenu from "react-native-simple-popup-menu";
import Context from "../Context/context";

const items = [
  { id: "abc", label: "가나다순" },
  { id: "age", label: "나이순" },
];

var myHeaders = new Headers();
export default class statistics extends Component {
  static contextType = Context;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: "",
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    myHeaders.append("Authorization", "Bearer " + this.context.manager_token);
    myHeaders.append("Content-Type", "application/json");
    this.userfunc();
  }

  userfunc = () => {
    fetch("http://hccparkinson.duckdns.org:19737/onlymanager/userlist?sort=0", {
      method: "GET",
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({ data: json.data }, () => {
          this.arrayholder = json.data;
        });
      });
  };

  //https://reactnativecode.com/search-bar-filter-on-flatlist-json-data/
  searchData(text) {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.uname.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
      text: text,
    });
  }

  onMenuPress = (id) => {
    console.log(id);
    if (id === "age") {
      fetch(
        "http://hccparkinson.duckdns.org:19737/onlymanager/userlist?sort=4",
        {
          method: "GET",
          headers: myHeaders,
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ data: json.data }, () => {
            this.arrayholder = json.data;
          });
        });
    } else if (id === "abc") {
      // 가나다순
      fetch(
        "http://hccparkinson.duckdns.org:19737/onlymanager/userlist?sort=0",
        {
          method: "GET",
          headers: myHeaders,
        }
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ data: json.data }, () => {
            this.arrayholder = json.data;
          });
        });
    }
  };

  render() {
    return (
      <View style={styles.finalView}>
        <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <Text style={styles.titleText}>환자 통계 관리</Text>

          <SimplePopupMenu
            style={styles.margin}
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
          <View style={styles.SearchBarWrapper}>
            <TextInput
              style={styles.SearchInput}
              onChangeText={(text) => this.searchData(text)}
              value={this.state.text}
              underlineColorAndroid="transparent"
              placeholder="환자 이름을 입력하세요."
            />
            <Ionicons name="search" size={20} color="#595959" />
          </View>
        </View>

        <View style={styles.threeView}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("user_statistics", {
                      id: item.uid,
                    });
                  }}
                >
                  <Task
                    user={item.uname}
                    birthday={item.birthday}
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
  sTextItem: {
    height: 50,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18,
  },
  sSearchBar: {
    paddingHorizontal: 10,
    margin: 10,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18,
  },
  menuView: {
    backgroundColor: "#FFFFFF",
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: "3%",
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
    marginBottom: 215,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },

  SearchBarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 10,
    width: "92%",
    borderRadius: 10,
  },

  SearchInput: {
    marginLeft: 10,
    flex: 3,
  },
});
