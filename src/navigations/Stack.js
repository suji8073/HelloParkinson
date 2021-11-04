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
import moveedit from "../screens/moveedit";
import moveedit from "../screens/addmove";
import user_statistics from "../screens/user_statistics";

import TabNavigation from "./Tab";
import TabNavigation1 from "./Tab1";
import patient_record from "../screens1/patient_record";
import patient_alarm from "../screens1/patient_alarm";
import patient_move from "../screens1/patient_move";
import patient_Home from "../screens1/patient_Home";
import patient_profile from "../screens1/patient_profile";
import patient_profile_edit from "../screens1/patient_profile_edit";

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
      <Stack.Screen name="user_statistics" component={user_statistics} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

      <Stack.Screen name="moveedit" component={moveedit} />
      <Stack.Screen name="addmove" component={addmove} />

      <Stack.Screen name="TabNavigation1" component={TabNavigation1} />

      <Stack.Screen name="patient_Home" component={patient_Home} />
      <Stack.Screen name="patient_move" component={patient_move} />
      <Stack.Screen name="patient_record" component={patient_record} />
      <Stack.Screen name="patient_alarm" component={patient_alarm} />
      <Stack.Screen name="patient_profile" component={patient_profile} />
     < Stack.Screen name="patient_profile_edit" component={patient_profile_edit} />
      



    </Stack.Navigator>
  );
};

export default StackNavigation;
