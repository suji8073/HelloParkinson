import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import list from "../screens/list";
import profile from "../screens/profile";
import statistics from "../screens/statistics";
import progress from "../screens/progress";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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

      tabBarActiveTintColor: '#5CB405',
        tabBarInactiveTintColor: '#BBBBBB',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',
          borderTopColor: '#BBBBBB',
          borderTopWidth: 1,
          paddingBottom : 10,
          height : 84,
        }
      }}
      >
      <Tab.Screen
        name="환자 목록"
        component={list}
        createBottomTabNavigator 
        options={{
          tabBarLabel: '목 록',
          headerTitleAlign: 'center',
          tabBarLabelStyle: 'bold',
          tabBarIcon: props => menuIcon({...props, name:'reader'}),
        }}

      />
      <Tab.Screen
        name="환자 통계 관리"
        component={statistics}
    
        options={{
          tabBarLabel: '통 계',
          headerTitleAlign: 'center',
          tabBarIcon: props => menuIcon({...props, name:'md-pie-chart-outline'}),
        }}
      />
      <Tab.Screen
        name="환자 진도율 관리"
        borderTopWidth = {s}
        component={progress}
        options={{
          tabBarLabel: '진도율',
          headerTitleAlign: 'center',
          tabBarIcon: props => menuIcon({...props, name:'podium'}),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={profile}
        options={{
          tabBarLabel: '프로필',
          headerTitleAlign: 'center',
          tabBarIcon: props => TabIcon({...props, name:'account-circle'}),
        }}
      />
    </Tab.Navigator>
  );
};


export default TabNavigation;