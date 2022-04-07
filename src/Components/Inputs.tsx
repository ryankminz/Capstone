import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export interface IInputProps {
  value: any;
  setValue: any;
  placeholder: any;
  secureTextEntry: any;
}

const Input: React.FC<IInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  //Code heres

  //Html here
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderColor: '#676767',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    textAlign: 'center',
  },
});

export default Input;
