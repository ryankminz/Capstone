import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import Button from '../../Components/Buttons';
import {useNavigation} from '@react-navigation/native';
import Input from '../../Components/Inputs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';

export interface ICustomMealProps {}

const CustomMeal: React.FC<ICustomMealProps> = props => {
  //Code here

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [userName, setUserName] = useState('');

  const _storeFood = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    try {
      const newMeal: string = e.nativeEvent.text;
      let mealArray: string[] = [];
      const mealData = await AsyncStorage.getItem('@BioTracker:meals');
      if (mealData !== null) {
        mealArray = [...JSON.parse(mealData)];
      }
      mealArray.push(newMeal);
      await AsyncStorage.setItem(
        '@BioTracker:meals',
        JSON.stringify(mealArray),
      );
      navigation.navigate(`AddPage` as never, {} as never);
    } catch (error) {
      console.error(error);
      // Error saving data
    }
  };

  //Html here
  return (
    <View>
      <TextInput
        placeholder="Enter Food Name. PlaceHolder, unfinished"
        onSubmitEditing={_storeFood}
      />
    </View>
  );
};

export default CustomMeal;
