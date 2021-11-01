import React from "react";
import { Button, StatusBar } from "react-native";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  background-color: #ffffff;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const profile = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <StyledText>Home</StyledText>

    </Container>
  );
};

export default profile;
