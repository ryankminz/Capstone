import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../Screens/PostLoginScreens/HomeScreen';
import {FirstScreenNavigator, SecondScreenNavigator} from './LoginNavigate';
import {NavigationContainer} from '@react-navigation/native';
import Profile from '../Screens/PostLoginScreens/ProfileScreen';

export interface IBottomTabsProps {}

const BottomTabs: React.FC<IBottomTabsProps> = props => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPage"
          component={FirstScreenNavigator}
          options={{
            tabBarLabel: 'Add Meal',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="food-apple"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={SecondScreenNavigator}
          options={{
            tabBarLabel: 'Calendar',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="dumbbell"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="dumbbell"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
