// @ts-nocheck
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export interface IButtonProps {
  onPress: any;
  text: any;
  containerType: any;
  textType: any;
}

const Button: React.FC<IButtonProps> = ({
  onPress,
  text,
  containerType,
  textType,
}) => {
  //Code here

  //Html here
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, styles[`container${containerType}`]]}>
      <Text style={[styles.text, styles[`text${textType}`]]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
    borderColor: '#c06eff',
    color: 'black',
  },
});

export default Button;
