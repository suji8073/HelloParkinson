import React from "react";
import Styled from "styled-components/native";

const ImageBackground = Styled.ImageBackground`
    flex: 1;
    height: 100%;
    weight: 100%;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Background = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2021/10/19/09/46/nature-6723133_1280.jpg",
      }}
    />
  );
};

export default Background;
