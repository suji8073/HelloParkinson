import React from "react";
import { Button, StatusBar, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

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
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <StyledText>List</StyledText>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("user_progress");
        }}
      >
        <Text style={{ color: "#59A60B", fontSize: 17 }}>
          환자A 운동 진도율 확인하기
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default progress;
