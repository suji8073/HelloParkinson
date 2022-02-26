import React, { Component, useEffect } from "react";
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
    this.state = {
      init_set: this.props.route.params.init_set,
      reset_check: this.props.route.params.reset_check,
    };
  }

  render() {
    return (
      <Tab.Navigator
        initialRouteName={
          this.props.route.params.init_set == "Home"
            ? "patient_Home"
            : this.props.route.params.init_set == "alarm"
            ? "patient_alarm"
            : this.props.route.params.init_set == "move"
            ? "patient_move"
            : "patient_record"
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
          name="patient_Home"
          component={patient_Home}
          initialParams={{
            init_set: this.state.init_set,
            reset_check: this.state.reset_check,
          }}
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
          name="patient_move"
          component={patient_move}
          initialParams={{
            init_set: this.state.init_set,
            reset_check: this.state.reset_check,
          }}
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
          name="patient_record"
          component={patient_record}
          initialParams={{
            init_set: this.state.init_set,
            reset_check: this.state.reset_check,
          }}
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
          name="patient_alarm"
          component={patient_alarm}
          initialParams={{
            init_set: this.state.init_set,
            reset_check: this.state.reset_check,
          }}
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
