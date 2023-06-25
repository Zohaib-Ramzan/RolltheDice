import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native';
import MyPicker from 'react-native-easy-item-picker'

type Diceprops = PropsWithChildren <{
  imageUrl : ImageSourcePropType
}>

import DiceOne from './src/assets/One.png';
import DiceTwo from './src/assets/Two.png';
import DiceThree from './src/assets/Three.png';
import DiceFour from './src/assets/Four.png';
import DiceFive from './src/assets/Five.png';
import DiceSix from './src/assets/Six.png';

const Dice = ({imageUrl} : Diceprops) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )

}


function App(): JSX.Element {
  const dicePicker = DicePicker()[0]

  return (
    <View>
      <Text>Hello You All!</Text>
      <View>
      </View>
      </View>

  )
}

const styles = StyleSheet.create({
  diceImage : {
    width : 200,
    height : 200
  }
});

export default App;
