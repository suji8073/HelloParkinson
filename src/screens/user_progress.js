import React from "react";
import {
  Button,
  StatusBar,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Touchable,
} from "react-native";
import { Directions } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const progress = ({ navigation }) => {
  return (
    <Container>
      {/* 사진, 전체진도율 뷰 */}
      <View style={{ flexDirection: "row" }}>
        {/* 사진 뷰 */}
        <View style={{ margin: 20, flex: 0.3 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("moveedit");
            }}
          >
            <Text>회원가입하기</Text>
          </TouchableOpacity>
        </View>
        <Ionicons name="md-checkmark-circle" size={110} color="green" />
        {/* 전체 진도율 뷰 */}
        <View
          style={{
            flexDirection: "column",
            flex: 0.7,
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
            김옥분/77세/여
          </Text>
          <Text style={{ marginBottom: 10, fontSize: 15 }}>
            오늘 전체 진도율 85%
          </Text>
        </View>
      </View>
      {/* <View style={{ borderColor: "#ffffff", borderRadius: "30%" }}></View> */}
      {/* 진행중부터? 스크롤 */}
      <ScrollView>
        <View></View>
      </ScrollView>
    </Container>
  );
};

export default progress;
