import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { list, statistics, progress, profile } from '../screens/TabScreens';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabIcon = ({ name, size, color }) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};

const menuIcon = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="list"
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
          borderTopColor: '#BBBBBB',
          borderTopWidth: 2,
        },
        activeTintColor: '#5CB405',
        inactiveTintColor:'#BBBBBB',
      }}
      >
      <Tab.Screen
        name="환자 목록"
        justifyContent: "center",
        component={list}
        options={{
          tabBarLabel: '목 록',
          tabBarIcon: props => menuIcon({...props, name:'reader'}),
        }}

      />
      <Tab.Screen
        name="환자 통계 관리"
        component={statistics}
        options={{
          tabBarLabel: '통 계',
          tabBarIcon: props => menuIcon({...props, name:'md-pie-chart-outline'}),
        }}
      />
      <Tab.Screen
        name="환자 진도율 관리"
        component={progress}
        options={{
          tabBarLabel: '진도율',
          tabBarIcon: props => menuIcon({...props, name:'podium'}),
        }}
      />
      <Tab.Screen
        name="프로필"
        component={profile}
        options={{
          tabBarLabel: '프로필',
          tabBarIcon: props => TabIcon({...props, name:'account-circle'}),
        }}
      />
    </Tab.Navigator>
  );
};


export default TabNavigation;