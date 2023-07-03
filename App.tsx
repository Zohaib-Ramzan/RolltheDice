import React, {useState} from 'react';
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
  ImageBackground,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

import frame1 from './src/assets/frames/frame1.jpg'
import frame2 from './src/assets/frames/frame2.jpg'
import frame3 from './src/assets/frames/frame3.jpg'
import frame4 from './src/assets/frames/frame4.jpg'

import Circle from './src/assets/shapes/Circle.png';
import Triangle from './src/assets/shapes/Triangle.png';
import Rectangle from './src/assets/shapes/Rectangle.png';
import Parallelogram from './src/assets/shapes/Parallelogram.png';

import DiceOne from './src/assets/One.png';
import DiceTwo from './src/assets/Two.png';
import DiceThree from './src/assets/Three.png';
import DiceFour from './src/assets/Four.png';
import DiceFive from './src/assets/Five.png';
import DiceSix from './src/assets/Six.png';

const Dice = ({imageUrl}: Diceprops) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const Shape = ({imageUrl}: Diceprops) => {
  return (
    <View>
      <Image style={styles.shapeImage} source={imageUrl} />
    </View>
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [shape, setShape] = useState<ImageSourcePropType>(Circle);
  const [frame, setFrame] = useState<ImageSourcePropType>(frame1);


  const handlePress = () => {
    Rollframes();
    RollonTap();
    Rollimages();
  };

  const Rollframes = () => {
    let randomframe = Math.floor(Math.random() * 4) + 1;
    switch (randomframe) {
      case 1:
        setFrame(frame1);
        break;
      case 2:
        setFrame(frame2);
        break;
      case 3:
        setFrame(frame3);
        break;
      case 4:
        setFrame(frame4);
        break;

      default:
        setFrame(frame1);
        break;
    }
  };

  const RollonTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }
  };

  const Rollimages = () => {
    let randomshape = Math.floor(Math.random() * 4) + 1;
    switch (randomshape) {
      case 1:
        setShape(Circle);
        break;
      case 2:
        setShape(Rectangle);
        break;
      case 3:
        setShape(Triangle);
        break;
      case 4:
        setShape(Parallelogram);
        break;

      default:
        setShape(Circle);
        break;
    }
  };

  ReactNativeHapticFeedback.trigger('impactLight', options);

  return (
    <View style={[styles.container ]}>
      <ImageBackground
        source={frame}
        style={styles.backgroundImage}
      >
      <View style={{marginBottom: 10}}>
        <Shape imageUrl={shape} />
      </View>
      <View style={{marginBottom: 10}}>
        <Dice imageUrl={diceImage} />
      </View>
      <Pressable onPress={handlePress}>
        <Text style={styles.rollDiceBtnTxt}>Roll the shapes</Text>
      </Pressable>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  diceImage: {
    width: 200,
    height: 200,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rollDiceBtnTxt: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: '700',
    borderColor: '#E5E0FF',
    color: '#8EA7E9',
    backgroundColor : "#CAD5E2"
  },
  shapeImage: {
    width: 200,
    height: 200,
  },
  backgroundImage : {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
