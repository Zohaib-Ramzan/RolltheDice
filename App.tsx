import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type Diceprops = PropsWithChildren <{
  imageUrl : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

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

  const [diceImage , setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const RollonTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
        case 2:
        setDiceImage(DiceTwo)
        break;
        case 3:
        setDiceImage(DiceThree)
        break;
        case 4:
        setDiceImage(DiceFour)
        break;
        case 5:
        setDiceImage(DiceFive)
        break;
        case 6:
        setDiceImage(DiceSix)
        break;
    
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  ReactNativeHapticFeedback.trigger("impactLight", options);

  return (
    <View style={styles.container}>
    <Dice imageUrl={diceImage}/>
    <Pressable onPress={RollonTap}>
      <Text style={styles.rollDiceBtnTxt}>Roll the Dice</Text></Pressable>
      </View>

  )
}

const styles = StyleSheet.create({
  diceImage : {
    width : 200,
    height : 200
  },
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : "center"
  },
  rollDiceBtnTxt : {
paddingVertical : 10,
paddingHorizontal : 40,
borderWidth : 2,
borderRadius : 8,
fontSize : 16,
textTransform : "uppercase",
fontWeight : "700",
borderColor : "#E5E0FF",
color : "#8EA7E9"
  }
});

export default App;
