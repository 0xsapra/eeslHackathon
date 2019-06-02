import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Insights from '../screens/Insights';
import SettingsScreen from '../screens/SettingsScreen';
import BillingScreen from "../screens/BillingScreen"



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        'md-home'
      }
    />
  ),
};

const Insight = createStackNavigator({
    Insights: Insights,
});

Insight.navigationOptions = {
  tabBarLabel: 'Insights',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-analytics'}
    />
  ),
};
const Billing = createStackNavigator({
    Billing: BillingScreen,
});
Billing.navigationOptions = {
    tabBarLabel: 'Billing',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={'logo-usd'}
      />
    ),
  };


Insight.navigationOptions = {
  tabBarLabel: 'Insights',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-analytics'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-alert'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  Insight,
  SettingsStack,
  Billing
});
