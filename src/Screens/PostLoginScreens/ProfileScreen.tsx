import React, {useState} from 'react';
import Button from '../../Components/Buttons';
import {auth} from '../../../firebase';
import {useNavigation} from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IProfileProps {}

const Profile: React.FC<IProfileProps> = props => {
  //Code here
  const navigation = useNavigation();
  const logOut = () => {
    auth.signOut().then(() => {
      AsyncStorage.clear();
    });
  };

  //Html here
  return (
    <Button text="Log Out" onPress={logOut} containerType="" textType="" />
  );
};

export default Profile;
