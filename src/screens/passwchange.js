import React from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Directions } from "react-native-gesture-handler";
const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex: 1;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const profile = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <View style={styles.menu1View}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TabNavigation");
          }}
        >
          <AntDesign name="left" size={24} color="#CACACA" />
        </TouchableOpacity>
        <View style={styles.margin}></View>
        <Text style={styles.titleText}>프로필 편집</Text>
        <View style={styles.margin}></View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("비밀번호가 정상적으로 변경되었습니다.");
            navigation.navigate("TabNavigation");
          }}
        >
          <AntDesign name="check" size={24} color="#5CB405" />
        </TouchableOpacity>
      </View>

      {/* 아이콘과 관리자 이름 뷰 */}
      <View
        style={{ flexDirection: "column", alignItems: "center", marginTop: 10 }}
      ></View>
      {/* 아이콘과 관리자 이름 뷰 */}
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Ionicons name="person-circle-sharp" size={120} color="lightblue" />
        <Text style={styles.titleText}>관리자</Text>
      </View>
      {/* 프로필정보 뷰 */}
      {/* <View style={{ justifyContent: "flex-start" }}> */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          marginTop: 10,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/* 한줄씩 뷰 */}
        <View style={styles.menuanswerView}>
          {/* 메뉴 뷰 */}
          <View style={styles.menuView}>
            <Text style={styles.menuText}>계정이름</Text>
          </View>
          {/* 답 뷰 */}
          <View style={styles.answerView}>
            <Text style={styles.answerText}>서울대학교 의료진</Text>
          </View>
        </View>
        {/* 한줄 끝 */}
        {/* 두번째줄 뷰 */}
        <View style={styles.menuanswerView}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>아이디</Text>
          </View>
          <View style={styles.answerView}>
            <Text style={styles.answerText}>seoul1234</Text>
          </View>
        </View>
        {/* 두번째줄 끝 */}
        {/* 세번째줄 뷰 */}
        <View style={styles.menuanswerView}>
          <View style={styles.menuView}>
            <Text style={styles.menuText}>새로운 비밀번호</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.answerView}>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => {
                  this.setState({ inputText: text });
                }}
                placeholder="(미 입력시 기존 비밀번호 유지)"
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* 세번째줄 끝 */}
      </View>
    </Container>
  );
};

export default profile;

const styles = StyleSheet.create({
  menuText: { justifyContent: "flex-start", fontSize: 17 },
  answerText: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    fontSize: 17,
  },
  menuView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    flex: 0.8,
  },
  answerView: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    flex: 1.2,
  },
  //한줄씩 뷰
  menuanswerView: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  titleText: {
    alignItems: "flex-start",
    fontSize: 21,
    paddingBottom: 20,
    alignItems: "center",
    color: "#000000",
    justifyContent: "center",
  },
  textInput: {
    fontSize: 15,
    color: "#AFAFAF",
  },
  menu1View: {
    marginTop: 30,
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

  margin: {
    // padding:30,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
