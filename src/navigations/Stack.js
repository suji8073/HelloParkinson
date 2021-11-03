import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import login from "../screens/login";
import signup1 from "../screens/signup1";
import signup2 from "../screens/signup2";
import signup3 from "../screens/signup3";
import signup4 from "../screens/signup4";
import passwchange from "../screens/passwchange";
import user_setting from "../screens/user_setting";
import user_progress from "../screens/user_progress";
import user_edit from "../screens/user_edit";
import TabNavigation from "./Tab";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="signup1" component={signup1} />
      <Stack.Screen name="signup2" component={signup2} />
      <Stack.Screen name="signup3" component={signup3} />
      <Stack.Screen name="signup4" component={signup4} />
      <Stack.Screen name="passwchange" component={passwchange} />
      <Stack.Screen name="user_setting" component={user_setting} />
      <Stack.Screen name="user_progress" component={user_progress} />
      <Stack.Screen name="user_edit" component={user_edit} />

      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
