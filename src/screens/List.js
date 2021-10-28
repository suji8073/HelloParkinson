import React from "react";
import { Button, StatusBar, View } from "react-native";
import styled from "styled-components/native";
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
  const _handleItemPress = params => {
    navigation.navigate('Channel', params);
  };


  return (
    <Container>
      <StatusBar backgroundColor="#D6D6D6" barStyle="dark-content" />
      {/*<FlatList
        keyExtractor={item => item['id']}
        data={channels}
        renderItem={({ item }) => (
          <Item item={item} onPress={_handleItemPress} />
        )}
        windowSize={3}
        />*/}
    </Container>
  );
};

export default list;
