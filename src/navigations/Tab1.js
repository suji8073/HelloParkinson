import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import patient_Home from "../screens1/patient_Home";
import patient_alarm from "../screens1/patient_alarm";
import patient_record from "../screens1/patient_record";
import patient_move from "../screens1/patient_move";
import patient_move1 from "../screens1/patient_move1";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={32} color={color} />;
};

const menuIcon1 = ({ name, size, color }) => {
  return <Entypo name={name} size={32} color={color} />;
};

const Tab = createBottomTabNavigator();

export default function TabNavigation1({ route, navigation }) {
  const name_user = route.params.paramName1;
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
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "홈",
          size: "10%",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) => menuIcon1({ ...props, name: "home" }),
        }}
      />

      <Tab.Screen
        name="운동"
        component={name_user === "kw1234" ? patient_move : patient_move1}
        initialParams={{ paramsName: name_user }}
        options={{
          headerShown: false,
          tabBarLabel: "운동",
          headerTitleAlign: "center",
          tabBarLabelStyle: {
            fontSize: 17,
            fontWeight: "bold",
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
            fontSize: 17,
            fontWeight: "bold",
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
            fontSize: 17,
            fontWeight: "bold",
          },
          tabBarIcon: (props) => menuIcon({ ...props, name: "alarm-outline" }),
        }}
      />
    </Tab.Navigator>
  );
}
