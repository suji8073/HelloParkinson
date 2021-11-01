import React from "react";
import { TouchableOpacity, StatusBar, Text } from "react-native";
import styled from "styled-components/native";
import SearchBar from './SearchBar';

const Container = styled.SafeAreaView`
  background-color: #ffffff;
  align-items: center;
`;
const StyledText = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const ItemTitle = styled.Text`
  font-size: 30px;
  margin-bottom: 10px;
`;

const list = ({ navigation }) => {
  return (
    <Container>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      <SearchBar />
      <TouchableOpacity onPress={() => {navigation.navigate("user_setting")}} >
        <StyledText>Home</StyledText>
      </TouchableOpacity>
          

    </Container>
  );
};

export default list;
