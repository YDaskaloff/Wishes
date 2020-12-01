/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import lucks from '../assets/lucksArray';

const Styles = {
  backgroundColor: '#FFF1D9',
  purple: '#7C007C',
  shadow: {
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
};

const Main = (props) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const img = require('../assets/detelina.png');
  const duration = 1500;

  const animatedValue = new Animated.Value(0);
  const spinValue = new Animated.Value(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const tryAgainOpacity = useRef(new Animated.Value(0)).current;
  const luckPosition = new Animated.Value(-10);

  console.log(luckPosition);

  const getLucky = () => {
    const luckIndex = Math.floor(Math.random() * lucks.length);
    const luck = lucks[luckIndex];
    return luck;
  };
  const [luckToDisplay, setLuckToDisplay] = useState(getLucky());

  const makeBig = Animated.timing(animatedValue, {
    toValue: 1,
    duration: duration,
    easing: Easing.cubic,
    useNativeDriver: true,
  });

  const handleAnimation = () => {
    fadeOutAnimFn.start();
    makeBig.start();
    spinItFast.start();
    setTimeout(() => {
      moveToMiddle.start();
    }, duration + 100);
    setTimeout(() => {
      spinItFast.stop();
      fadeInAnimFn.start();
    }, duration);
  };

  const moveToMiddle = Animated.timing(luckPosition, {
    toValue: 1,
    duration: 1,
    useNativeDriver: true,
  });

  const spinItFast = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 5,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  );

  const spinIt = Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2500,
      easing: Easing.exp,
      useNativeDriver: true,
    }),
  );

  const fadeOutAnimFn = Animated.timing(fadeAnim, {
    toValue: 0,
    duration: duration,
    useNativeDriver: false,
  });

  const fadeInAnimFn = Animated.timing(tryAgainOpacity, {
    toValue: 1,
    easing: Easing.linear,
    duration: duration,
    useNativeDriver: false,
  });

  const reset = () => {
    fadeAnim.setValue(1);
    animatedValue.setValue(0);
    tryAgainOpacity.setValue(0);
    spinValue.setValue(0);
    luckPosition.setValue(-10);
    spinIt.start();
    setLuckToDisplay(getLucky());
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  spinIt.start();

  return (
    <View style={styles.screen}>
      <StatusBar
        backgroundColor={Styles.backgroundColor}
        barStyle="dark-content"
      />
      <TouchableWithoutFeedback onPress={handleAnimation}>
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
      <Animated.View style={{opacity: fadeAnim, ...styles.promptContainer}}>
        <Text style={styles.promptTextMain}>Открий своя късмет!</Text>
        <Text style={styles.promptTextSub}>Докосни детелинката!</Text>
      </Animated.View>
      <Animated.View
        style={{
          ...styles.luckContainer,
          opacity: luckPosition,
          transform: [
            {
              translateY: luckPosition.interpolate({
                inputRange: [0, 1],
                outputRange: [windowHeight / 2, 1],
              }),
            },
          ],
        }}>
        <Animated.Text style={{...styles.luck}}>{luckToDisplay}</Animated.Text>
      </Animated.View>
      <Animated.View
        style={{opacity: tryAgainOpacity, ...styles.tryAgainContainer}}>
        <TouchableOpacity onPress={reset}>
          <View style={styles.tryAgainButton}>
            <Text style={styles.tryAgainText}>Още едно?</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Styles.backgroundColor,
  },
  promptContainer: {
    position: 'absolute',
    top: 30,
    width: '90%',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  promptTextSub: {
    fontSize: 18,
    color: Styles.purple,
  },
  promptTextMain: {
    fontSize: 25,
    color: Styles.purple,
    fontWeight: 'bold',
  },
  tryAgainContainer: {
    position: 'absolute',
    bottom: 30,
    borderRadius: 25,
    height: 50,
    width: '80%',
    backgroundColor: Styles.purple,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    ...Styles.shadow,
  },
  tryAgainButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAgainText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  luckContainer: {
    position: 'absolute',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'rgba(255, 241, 217, 0.8)',
    width: '95%',
  },
  luck: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Styles.purple,
    textAlign: 'center',
    ...Styles.shadow,
  },
});

export default Main;
