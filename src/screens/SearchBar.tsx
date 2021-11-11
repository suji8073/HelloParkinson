import React, {useState} from 'react';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';


const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  display: flex;
  width: 92%;
`;

const SearchInput = styled.TextInput`
  margin-left: 10px;
  include-font-padding: false;
  padding: 0px;
  flex:3;
`;



export default function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <SearchBarWrapper>
      <SearchInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
        placeholder=""
        returnKeyType="search"
        returnKeyLabel="search"
        value={value}
      />
      <Ionicons name="search" size={20} color="#595959" />
    </SearchBarWrapper>
  );
}