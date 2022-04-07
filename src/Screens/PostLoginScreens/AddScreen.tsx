import React, {useEffect, useState} from 'react';
import Button from '../../Components/Buttons';
import {
  StyleSheet,
  View,
  Image,
  Text,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../Components/Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
//@ts-ignore
import Logo from '../../Images/LogoText.png';
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
//import { SearchBar } from 'react-native-screens';

const AddScreen = () => {
  //Code here
  const navigation = useNavigation();
  const [mealData, setMealData] = useState<string[]>([]);
  const _getAllMeals = () => {
    try {
      console.log('here');
      let mealArray: string[] = [];
      AsyncStorage.getItem('@BioTracker:meals').then(data => {
        if (data !== null) {
          mealArray = JSON.parse(data);
        }
        setMealData(mealArray);
      });
    } catch (error) {
      console.error(error);

      // Error saving data
    }
  };

  useEffect(() => {
    _getAllMeals();
  }, []);

  const renderItem = (item: string) => (
    <Text style={styles.text}>
      <Image style={styles.tinyLogo} source={Logo} />
      {item}
    </Text>
  );
  return (
    <View style={styles.root}>
      <SearchBar />
      <Button
        text="Custom"
        onPress={() => navigation.navigate(`CustomMeal` as never, {} as never)}
        containerType=""
        textType=""
      />
      <FlatList
        data={mealData}
        renderItem={({item}) => {
          return renderItem(item);
        }}
        keyExtractor={(item, index) => `${item}-${index}`}
      />

      {/* {mealData.map(meal => {
        return (
          <Text style={styles.text}>
            <Image style={styles.tinyLogo} source={Logo} />
            {meal}
          </Text>
        );
      })} */}
    </View>
  );
  //Html here
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  tinyLogo: {
    height: 40,
    width: 40,
  },
  text: {
    padding: 5,
    marginLeft: 5,
  },
  btn: {},
});

export default AddScreen;
