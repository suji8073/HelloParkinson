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
const year = new Date();
export default class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      N_birth: 19431218,
      N_gender: "",
      N_memo: "",
      N_team: "",
      N_name: "",
      user_id: "",
    };
  }

  userfunc = () => {
    fetch("http://152.70.233.113/chamuser", {
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
  };

  onMenuPress = (id) => {
    if (id === "abc") {
      // 가나다순 클릭했을 때
      fetch("", {
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
    } else if (id === "star") {
      // 즐겨찾기순 클릭했을 때
      fetch("", {
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
        <View style={styles.menuView}>
          <View style={styles.margin}></View>
          <TouchableOpacity onPress={this.userfunc}>
            <Text style={styles.titleText}>환자 목록</Text>
          </TouchableOpacity>
          <SimplePopupMenu
            style={styles.margin}
            items={items}
            onSelect={(items) => {
              this.onMenuPress(items.id);
            }}
            cancelLabel={"취소"}
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
            data={this.userfunc()}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    alert(item.id);
                    fetch("http://152.70.233.113/chamuser/id/" + item.id, {
                      method: "GET",
                      headers: { "Content-Type": "application/json" },
                    })
                      .then((res) => res.json())
                      .then((json) => {
                        console.log("통신 확인");
                        this.setState({
                          N_birth: json.info.birth,
                          N_gender: json.info.gender,
                          N_memo: json.info.memo,
                          N_team: json.info.team,
                          N_name: json.info.name,
                        });
                      });
                    this.props.navigation.navigate("user_setting", {
                      paramName1: this.state.N_birth,
                      paramName2: this.state.N_gender,
                      paramName3: this.state.N_memo,
                      paramName4: this.state.N_team,
                      paramName5: this.state.N_name,
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
