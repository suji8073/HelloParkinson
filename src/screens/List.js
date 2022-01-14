import React, { Component } from "react";
import {
  TouchableOpacity,
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Task from "./task1";
import SimplePopupMenu from "react-native-simple-popup-menu";

const items = [
  { id: "abc", label: "가나다순" },
  { id: "star", label: "즐겨찾기순" },
];
const today = new Date();

export default class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      birth: 19431218,
      gender: "",
      memo: "",
      team: "",
      name: "",
      id: "",
      text: "",
      bookmark: 0,
    };
    this.arrayholder = [];
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
        this.setState({ data: json }, () => {
          this.arrayholder = json;
        });
      });
  };

  //https://reactnativecode.com/search-bar-filter-on-flatlist-json-data/
  searchData(text) {
    const newData = this.arrayholder.filter((item) => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      data: newData,
      text: text,
    });
  }

  onMenuPress = (id) => {
    if (id === "abc") {
      // 가나다순 클릭했을 때
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
          return this.state.data;
        });
    } else if (id === "star") {
      // 즐겨찾기순 클릭했을 때
      fetch("http://152.70.233.113/chamuser?sort=book", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ data: json });
          return this.state.data;
        });
    }
  };

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
          <Text>{this.state.data.bookmark}</Text>
          <FlatList
            keyExtractor={(item, index) => index}
            data={this.state.data}
            extraData={this.state.data}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    this.props.navigation.navigate("user_setting", {
                      paramName1: item.id,
                    });
                  }}
                >
                  <Task
                    id={item.id}
                    user={item.name}
                    age={item.birth}
                    sex={item.gender}
                    book={item.bookmark}
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
