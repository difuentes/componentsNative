import React, { useRef } from 'react';
import {Animated,Easing} from 'react-native';

export const useAnimation = () => {

  //ref opacidad
  const opacidad = useRef(new Animated.Value(0.2)).current;
  //ref altura
  const altura = useRef(new Animated.Value(-200)).current;
  //animacion de entrada 
  const fadeIn =(duration:number=300)=>{
      Animated.timing(
          opacidad,{
              toValue:1,
              duration,
              useNativeDriver:true
          }
      ).start();
  }
  //animacion de salida
  const fadeOut =()=>{
      Animated.timing(
          opacidad,{
              toValue:0.1,
              duration:400,
              useNativeDriver:true
          }
      ).start();
  }
  //animacion de rebote al centro
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
    //parametros de retorno de Hooks
    return {
        altura,
        opacidad,
        fadeIn,
        fadeOut,
        BounceOut,
        BounceIn
    }
}
