import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import list from "../screens/list";
import profile from "../screens/profile";
import statistics from "../screens/statistics";
import progress from "../screens/progress";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={32} color={color} />;
};

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={32} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="list"
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
        name="환자 목록"
        component={list}
        options={{
          headerShown: false,
          tabBarLabel: "목 록",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) => menuIcon({ ...props, name: "reader" }),
        }}
      />
      <Tab.Screen
        name="환자 통계 관리"
        component={statistics}
        options={{
          headerShown: false,
          tabBarLabel: "통 계",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) =>
            menuIcon({ ...props, name: "md-pie-chart-outline" }),
        }}
      />
      <Tab.Screen
        name="환자 진도율 관리"
        component={progress}
        options={{
          headerShown: false,
          tabBarLabel: "진도율",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) => menuIcon({ ...props, name: "podium" }),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={profile}
        options={{
          headerShown: false,
          tabBarLabel: "프로필",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) => TabIcon({ ...props, name: "account-circle" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
