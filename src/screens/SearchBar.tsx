import React, {useState} from 'react';
import styled from 'styled-components/native';

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
`;

const SearchIcon = styled.Image`
  width: 18px;
  height: 18px;
`;

export default function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <SearchBarWrapper>
      <SearchInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
        placeholder="                                                                                          "
        returnKeyType="search"
        returnKeyLabel="search"
        value={value}
      />
      <SearchIcon source={require('../icon/search.png')} />
    </SearchBarWrapper>
  );
}