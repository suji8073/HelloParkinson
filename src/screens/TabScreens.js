import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #54b7f9;
`;
const StyledText = styled.Text`
  font-size: 30px;
  color: #ffffff;
`;

export const list = () => {
  return (
    <Container>
      <StyledText>환자 목록</StyledText>
    </Container>
  );
};

export const statistics = () => {
  return (
    <Container>
      <StyledText>환자 통계 관리</StyledText>
    </Container>
  );
};

export const progress = () => {
  return (
    <Container>
      <StyledText>환자 진도율 관리</StyledText>
    </Container>
  );
};

export const profile = () => {
  return (
    <Container>
      <StyledText>프로필</StyledText>
    </Container>
  );
};