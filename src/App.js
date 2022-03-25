import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import StackNavigation from "./navigations/Stack";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
      {/* <TabNavigation /> */}
      {/* <ScreenLogin /> */}
    </NavigationContainer>
  );
};

export default App;
