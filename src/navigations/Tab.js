import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import list from "../screens/List";
import profile from "../screens/profile";
import statistics from "../screens/statistics";
import progress from "../screens/progress";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={30} color={color} />;
};

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={30} color={color} />;
};

const Tab = createBottomTabNavigator();
export default class TabNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log();
    return (
      <Tab.Navigator
        initialRouteName={
          this.props.route.params.init_set == "progress" ? "progress" : "list"
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
            height: responsiveScreenHeight(12),
          },
        }}
      >
        <Tab.Screen
          name="list"
          component={list}
          initialParams={{
            paramSetting:
              this.props.route.params.paramSetting === null
                ? "abc"
                : this.props.route.params.paramSetting,
          }}
          options={{
            headerShown: false,
            tabBarLabel: "목 록",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(1.88),
            },
            tabBarIcon: (props) => menuIcon({ ...props, name: "reader" }),
          }}
        />
        <Tab.Screen
          name="statistics"
          component={statistics}
          options={{
            headerShown: false,
            tabBarLabel: "통 계",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(1.88),
            },
            tabBarIcon: (props) =>
              menuIcon({ ...props, name: "md-pie-chart-outline" }),
          }}
        />
        <Tab.Screen
          name="progress"
          component={progress}
          initialParams={{
            paramSetting2:
              this.props.route.params.paramSetting2 == null
                ? "progress"
                : this.props.route.params.paramSetting2,
          }}
          options={{
            headerShown: false,
            tabBarLabel: "진도율",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(1.88),
            },
            tabBarIcon: (props) => menuIcon({ ...props, name: "podium" }),
          }}
        />
        <Tab.Screen
          name="profile"
          component={profile}
          options={{
            headerShown: false,
            tabBarLabel: "프로필",
            headerTitleAlign: "center",
            tabBarLabelStyle: {
              fontSize: responsiveScreenFontSize(1.88),
            },
            tabBarIcon: (props) =>
              TabIcon({ ...props, name: "account-circle" }),
          }}
        />
      </Tab.Navigator>
    );
  }
}
