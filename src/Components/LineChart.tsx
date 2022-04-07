import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

export interface ILineCharterProps {}

const LineCharter: React.FC<ILineCharterProps> = props => {
  //Code here
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
    datasets: [
      {
        data: [2140, 2400, 2600, 2100, 3500, 2030, 2100],
        color: (opacity = 1) => `rgba(240, 146, 255, ${opacity})`, // optional
        strokeWidth: 5, // optional
      },
    ],
    legend: ['Calories Daily'], // optional
  };
  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0,
  };
  //Html here
  return (
    <LineChart
      style={styles.root}
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      withInnerLines={false}
      withShadow={false}
      bezier
    />
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 30,
    margin: 10,
    borderRadius: 10,
  },
});

export default LineCharter;
