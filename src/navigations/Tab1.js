import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import patient_Home from "../screens1/patient_Home";
import patient_alarm from "../screens1/patient_alarm";
import patient_record from "../screens1/patient_record";
import patient_move from "../screens1/patient_move";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={32} color={color} />;
};

const menuIcon1 = ({ name, size, color }) => {
  return <Entypo name={name} size={32} color={color} />;
};

import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("확인중");
    console.log(this.props.route.params.init_set);
  }
  render() {
    return (
      <Tab.Navigator
        initialRouteName={
          this.props.route.params.init_set == "Home"
            ? "홈"
            : this.props.route.params.init_set == "alarm"
            ? "알림"
            : this.props.route.params.init_set == "move"
            ? "운동"
            : "기록"
        }
        screenOptions={{
          tabBarActiveTintColor: "#5CB405",
          tabBarInactiveTintColor: "#BBBBBB",
          tabBarStyle: {
            backgroundColor: "#ffffff",
            position: "absolute",
            borderTopColor: "#BBBBBB",
            borderTopWidth: 1,
            paddingBottom: "2%",
            height: responsiveScreenHeight(13.1),
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
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            },
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
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            },
            tabBarIcon: (props) =>
              menuIcon1({ ...props, name: "controller-play" }),
          }}
        />
        <Tab.Screen
          name="기록"
          component={patient_record}
          options={{
            headerShown: false,
            tabBarLabel: "기록",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            },
            tabBarIcon: (props) => menuIcon({ ...props, name: "podium" }),
          }}
        />
        <Tab.Screen
          name="알림"
          component={patient_alarm}
          options={{
            headerShown: false,
            tabBarLabel: "알림",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(2),
              fontWeight: "bold",
            },
            tabBarIcon: (props) =>
              menuIcon({ ...props, name: "alarm-outline" }),
          }}
        />
      </Tab.Navigator>
    );
  }
}
