import React from 'react';
import LineChart from '../../Components/LineChart';
import {View} from 'react-native';

export interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = props => {
  //Code here

  //Html here
  return (
    <View>
      <LineChart />
    </View>
  );
};

export default HomeScreen;
