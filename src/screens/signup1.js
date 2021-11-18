import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";
import checkgreensvg from "../icon/checkgreen.svg";
import checksilversvg from "../icon/checkgreen.svg";
function signup1({ navigation }) {
  return (
    <View style={styles.finalView}>
      <View style={styles.settingView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          <View>
            <AntDesign name="left" size={24} color="#CACACA" />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.titleText}>
          굿나잇 파킨슨이 처음이시군요.{"\n"}
          <Text style={styles.point}>약관내용에 동의</Text>해주세요.
        </Text>
      </View>
      <View style={styles.marginView}></View>

      <View style={styles.groupa}>
        <View style={styles.group}>
          <TouchableOpacity
          //onPress={()=>this.moveToAddNewCustomer()}
          >
            <FontAwesome name="circle-thin" size={30} color="#E1E1E1" />
          </TouchableOpacity>
          <Text style={styles.MText}> 약관 전체 동의 </Text>
        </View>
        <View style={styles.line}></View>

        <View style={styles.marginView2}></View>

        <View style={styles.MainView}>
          <View style={styles.group}>
            <TouchableOpacity
              //onPress={()=>this.moveToAddNewCustomer()}
              onPress={() => {
                document.getElementById("change").name = "";
              }}
            >
              <FontAwesome
                id="change"
                name="circle-thin"
                size={30}
                color="#E1E1E1"
              />
            </TouchableOpacity>

            <Text style={styles.SText}> 이용약관 동의 (필수) </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup2");
            }}
          >
            <AntDesign name="right" size={24} color="#CACACA" />
          </TouchableOpacity>
        </View>

        <View style={styles.MainView}>
          <View style={styles.group}>
            <TouchableOpacity
            //onPress={()=>this.moveToAddNewCustomer()}
            >
              <FontAwesome name="circle-thin" size={30} color="#E1E1E1" />
            </TouchableOpacity>
            <Text style={styles.SText}>개인정보 수집 및 이용 동의 (필수)</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("signup3");
            }}
          >
            <AntDesign name="right" size={24} color="#CACACA" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.chatControl}>
        <TouchableOpacity
          style={styles.sendButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate("signup4");
          }}
        >
          <Text style={styles.white}> 다 음 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default signup1;

const styles = StyleSheet.create({
  finalView: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupa: {
    margin: "2%",
  },
  settingView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "5%",
    marginTop: "10%",
  },
  line: {
    borderBottomWidth: 2,
    borderColor: "#E5E5E5",
    marginTop: "3%",
    marginBottom: "3%",
  },
  marginView: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  marginView2: {
    marginBottom: 5,
    marginTop: 5,
  },
  MainView: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "4%",
  },
  titleText: {
    alignSelf: "flex-start",
    fontSize: 27,
    fontWeight: "bold",
    color: "#000000",
    lineHeight: 40,
  },
  MText: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginLeft: "3%",
  },
  SText: {
    fontSize: 20,
    justifyContent: "flex-start",
    color: "#1E1E1E",
    marginLeft: "3%",
  },
  point: {
    alignSelf: "flex-start",
    fontSize: 27,
    fontWeight: "bold",
    color: "#7AC819",
  },
  white: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  sendButton: {
    backgroundColor: "#7AC819",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "35%",
  },

  chatControl: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
