import React, { useRef } from 'react';
import {Animated,Easing} from 'react-native';

export const useAnimation = () => {

  //ref opacidad
  const opacidad = useRef(new Animated.Value(0.2)).current;
  //ref altura
  const altura = useRef(new Animated.Value(-200)).current;

  const fadeIn =()=>{
      Animated.timing(
          opacidad,{
              toValue:1,
              duration:400,
              useNativeDriver:true
          }
      ).start();
  }

  const fadeOut =()=>{
      Animated.timing(
          opacidad,{
              toValue:0.1,
              duration:400,
              useNativeDriver:true
          }
      ).start();
  }

  const BounceIn = ()=>{
      Animated.timing(
          altura
          ,{
              toValue:0,
              duration:700,
              useNativeDriver:true,
              easing : Easing.bounce
          }
      ).start();
  }

  const BounceOut = ()=>{
      Animated.timing(
          altura
          ,{
              toValue:-400,
              duration:700,
              useNativeDriver:true,
              easing : Easing.bounce
          }
      ).start();
  }

    return {
        altura,
        opacidad,
        fadeIn,
        fadeOut,
        BounceOut,
        BounceIn
    }
}
