import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import list from "../screens/List";
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
import progress from "../screens/progress";

import task1 from "../screens/task1";
import user_statistics from "../screens/user_statistics";
import profile from "../screens/profile";
import TabNavigation from "./Tab";
import TabNavigation1 from "./Tab1";
import TabNavigation2 from "./Tab2";
import patient_record from "../screens1/patient_record";
import patient_alarm from "../screens1/patient_alarm";
import patient_move from "../screens1/patient_move";
import patient_Home from "../screens1/patient_Home";

import profile_gallery from "../screens1/profile_gallery";
import norank_patient_Home from "../screens1/norank_patient_Home";
import patient_profile from "../screens1/patient_profile";
import patient_profile_edit from "../screens1/patient_profile_edit";

import alarm_task from "../screens1/task_alarm";
import alarm_edit from "../screens1/alarm_edit";
import alarm_add from "../screens1/alarm_add";

import move_1 from "../screens1/move_1";
import move_2 from "../screens1/move_2";
import move_3 from "../screens1/move_3";
import move_4 from "../screens1/move_4";
import move_5 from "../screens1/move_5";
import yusanso_1 from "../screens1/yusanso_1";
import yusanso_2 from "../screens1/yusanso_2";
import move_play from "../screens1/move_play";
import move_play_1 from "../screens1/move_play_1";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="task1" component={task1} />
      <Stack.Screen name="list" component={list} />
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
      <Stack.Screen name="profile" component={profile} />
      <Stack.Screen name="moveedit" component={moveedit} />

      <Stack.Screen name="progress" component={progress} />
      <Stack.Screen name="TabNavigation1" component={TabNavigation1} />
      <Stack.Screen name="TabNavigation2" component={TabNavigation2} />

      <Stack.Screen
        name="norank_patient_Home"
        component={norank_patient_Home}
      />
      <Stack.Screen name="patient_Home" component={patient_Home} />
      <Stack.Screen name="patient_move" component={patient_move} />
      <Stack.Screen name="patient_record" component={patient_record} />
      <Stack.Screen name="patient_alarm" component={patient_alarm} />
      <Stack.Screen name="patient_profile" component={patient_profile} />
      <Stack.Screen name="profile_gallery" component={profile_gallery} />

      <Stack.Screen name="alarm_task" component={alarm_task} />
      <Stack.Screen name="alarm_edit" component={alarm_edit} />
      <Stack.Screen name="alarm_add" component={alarm_add} />

      <Stack.Screen name="move_1" component={move_1} />
      <Stack.Screen name="move_2" component={move_2} />
      <Stack.Screen name="move_3" component={move_3} />
      <Stack.Screen name="move_4" component={move_4} />
      <Stack.Screen name="move_5" component={move_5} />
      <Stack.Screen name="yusanso_1" component={yusanso_1} />
      <Stack.Screen name="yusanso_2" component={yusanso_2} />

      <Stack.Screen name="move_play" component={move_play} />
      <Stack.Screen name="move_play_1" component={move_play_1} />
      <Stack.Screen
        name="patient_profile_edit"
        component={patient_profile_edit}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
