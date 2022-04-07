import React, {useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import Button from '../../Components/Buttons';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../../Components/Inputs';
import {auth} from '../../../firebase';
//@ts-ignore
import Logo from '../../Images/LogoText.png';

export interface ISignUpScreenProps {}

const SignUpScreen: React.FC<ISignUpScreenProps> = props => {
  //Code here
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        //@ts-ignore
        navigation.navigate(`Home` as never, {} as never);
      }
    });
    return unsubscribe;
  }, []);

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;

        console.log('Created in with ', user?.email);
      })
      .catch(error => alert(error.message));
  };

  const onLoginPress = () => {
    navigation.navigate(`Login` as never, {} as never);
  };
  //Html here
  return (
    <KeyboardAvoidingView style={styles.root}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={null}
        />
        <Input
          placeholder="Enter Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Register"
          onPress={handleSignup}
          containerType=""
          textType=""
        />
        <Button
          text="Already have an account? Login!"
          onPress={onLoginPress}
          containerType=""
          textType=""
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  logo: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default SignUpScreen;

function alert(message: any): any {
  throw new Error('Function not implemented.');
}
