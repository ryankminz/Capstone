import * as React from 'react';
import {View, Alert, Dimensions} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import Button from '../../Components/Buttons';
import {useNavigation} from '@react-navigation/core';

export interface IDatePickerProps {}

const DatePicker: React.FC<IDatePickerProps> = props => {
  const width = Dimensions.get('window').width;

  const navigation = useNavigation();

  const onPrescriptionPress = () => {
    //Alert.alert('PrescriptionPress')
    //navigation.navigate('PrescriptionAdd' as never, {} as never);
  };
  const onWorkoutPress = () => {
    //Alert.alert('WorkoutPress')
    navigation.navigate('WorkoutAdd' as never, {} as never);
  };

  return (
    <View>
      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.
        calendarWidth={width}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        firstDay={1}
      />

      <Button
        text="Prescription"
        onPress={onPrescriptionPress}
        containerType=""
        textType=""
      />

      <Button
        text="Workout"
        onPress={onWorkoutPress}
        containerType=""
        textType=""
      />
    </View>
  );
};

export default DatePicker;
