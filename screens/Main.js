/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const Main = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const animatedValue = new Animated.Value(0);
  const spinValue = new Animated.Value(0);
  const img = require('../assets/detelina.png');
  const [clockwise, setClockwise] = useState(true);
  const [isBig, setIsBig] = useState(false);

  const makeBig = Animated.timing(animatedValue, {
    toValue: 1,
    duration: 1500,
    easing: Easing.cubic,
    useNativeDriver: true,
  });

  const handleAnimation = () => {
    if (!isBig) {
      spinIt.stop();
      makeBig.start();
      setIsBig(true);
    }
  };

  const spinIt = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2500,
      easing: Easing.exp,
      useNativeDriver: true,
    }),
  );

  spinIt.start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback
        onPress={() => {
          handleAnimation();
          setIsBig(!isBig);
        }}>
        <Animated.Image
          source={img}
          resizeMode="contain"
          style={{
            width: windowWidth / 5,
            height: windowWidth / 5,
            transform: [
              {rotate: spin},
              {
                scaleX: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4.5],
                }),
              },
              {
                scaleY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 4.5],
                }),
              },
            ],
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF1D9',
  },
});

export default Main;
