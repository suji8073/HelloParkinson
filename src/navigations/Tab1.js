import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import patient_Home from "../screens1/patient_Home";
import patient_alarm from "../screens1/patient_alarm";
import patient_record from "../screens1/patient_record";
import patient_move from "../screens1/patient_move";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Antdesign } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={32} color={color} />;
};

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={32} color={color} />;
};

const menuIcon1 = ({ name, size, color }) => {
  return <Entypo name={name} size={32} color={color} />;
};

const menuIcon2 = ({ name, size, color }) => {
  return <Antdesign  name={name} size={32} color={color} />;
};
const Tab = createBottomTabNavigator();

const TabNavigation1 = () => {
  return (
    <Tab.Navigator
      initialRouteName="patient_Home"
      screenOptions={{
        tabBarActiveTintColor: "#5CB405",
        tabBarInactiveTintColor: "#BBBBBB",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          position: "absolute",
          borderTopColor: "#BBBBBB",
          borderTopWidth: 1,
          paddingBottom: 20,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="홈"
        component={patient_Home}
        options={{
          headerShown: false,
          tabBarLabel: "홈",
          headerTitleAlign: "center",
          tabBarLabelStyle: "bold",
          tabBarIcon: (props) => menuIcon1({ ...props, name: "home" }),
        }}
      />

      <Tab.Screen
        name="운동"
        component={patient_move}
        options={{
          headerShown: false,
          tabBarLabel: "운동",
          headerTitleAlign: "center",
          tabBarIcon: (props) => menuIcon1({ ...props, name: "controller-play" }),
        }}
      />
      <Tab.Screen
        name="기록"
        component={patient_record}
        options={{
          headerShown: false,
          tabBarLabel: "기록",
          headerTitleAlign: "center",
          tabBarIcon: (props) =>
            menuIcon({ ...props, name: "md-pie-chart-outline" }),
        }}
      />
      <Tab.Screen
        name="알림"
        component={patient_alarm}
        options={{
          headerShown: false,
          tabBarLabel: "알림",
          headerTitleAlign: "center",
          tabBarIcon: (props) => menuIcon({ ...props, name: "podium" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation1;
