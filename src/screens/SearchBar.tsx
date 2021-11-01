import React, {useState} from 'react';
import styled from 'styled-components/native';

const SearchBarWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 4px;
  padding: 10px 14px 10px 12px;
  margin: 0px 20px;
  display: flex;
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
        placeholder="검색어를 입력해 주세요."
        returnKeyType="search"
        returnKeyLabel="search"
        value={value}
      />
      <SearchIcon source={require('../icon/search.png')} />
    </SearchBarWrapper>
  );
}