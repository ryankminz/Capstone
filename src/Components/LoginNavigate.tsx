import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calendar from '../Screens/PostLoginScreens/Calendar';
import AddScreen from '../Screens/PostLoginScreens/AddScreen';
import CustomMeal from '../Screens/PostLoginScreens/CustomMeal';
import AddWorkout from '../Screens/PostLoginScreens/WorkoutAdd';

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Stack3 = createNativeStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="AddPage"
        component={AddScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CustomMeal"
        component={CustomMeal}
      />
    </Stack.Navigator>
  );
};
export {FirstScreenNavigator};

const SecondScreenNavigator = () => {
  return (
    <Stack2.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Calendar"
        component={Calendar}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="WorkoutAdd"
        component={AddWorkout}
      />
    </Stack2.Navigator>
  );
};
export {SecondScreenNavigator};
