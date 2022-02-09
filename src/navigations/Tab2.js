import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import norank_patient_Home from "../screens1/norank_patient_Home";
import patient_Home from "../screens1/patient_Home";
import patient_alarm from "../screens1/patient_alarm";
import patient_record from "../screens1/patient_record";
import patient_move from "../screens1/patient_move";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={30} color={color} />;
};

const menuIcon1 = ({ name, size, color }) => {
  return <Entypo name={name} size={30} color={color} />;
};

const Tab = createBottomTabNavigator();

export default function TabNavigation2({ route, navigation }) {
  const name_user = route.params.paramName1;
  return (
    <Tab.Navigator
      initialRouteName="norank_patient_Home"
      screenOptions={{
        tabBarActiveTintColor: "#5CB405",
        tabBarInactiveTintColor: "#BBBBBB",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          position: "absolute",
          borderTopColor: "#BBBBBB",
          borderTopWidth: 1,
          paddingBottom: "2%",
          height: responsiveScreenHeight(12),
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={norank_patient_Home}
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "홈",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: responsiveScreenFontSize(1.88),
          },
          tabBarIcon: (props) => menuIcon1({ ...props, name: "home" }),
        }}
      />

      <Tab.Screen
        name="운동"
        component={patient_move}
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "운동",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: responsiveScreenFontSize(1.88),
          },
          tabBarIcon: (props) =>
            menuIcon1({ ...props, name: "controller-play" }),
        }}
      />
      <Tab.Screen
        name="기록"
        component={patient_record}
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "기록",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: responsiveScreenFontSize(1.88),
          },
          tabBarIcon: (props) => menuIcon({ ...props, name: "podium" }),
        }}
      />
      <Tab.Screen
        name="알림"
        component={patient_alarm}
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "알림",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: responsiveScreenFontSize(1.88),
          },
          tabBarIcon: (props) => menuIcon({ ...props, name: "alarm-outline" }),
        }}
      />
    </Tab.Navigator>
  );
}
