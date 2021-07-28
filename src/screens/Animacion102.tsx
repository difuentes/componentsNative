import React,{useRef} from 'react'
import { StyleSheet, View, Animated,PanResponder } from 'react-native';


export const Animacion102 = () => {

    const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
        [
            null,
            {dx: pan.x,dy: pan.y,},
        ],{useNativeDriver:false}),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 },useNativeDriver:false} // Back to zero
      ).start();
    }})
    
    

    return (
        <View style={{...styles.container}}>
            <Animated.View 
            style={[styles.purpleBox,pan.getLayout()]}
            {...panResponder.panHandlers}
            >

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    purpleBox:{
        width:150,
        height:150,
        backgroundColor:'purple',
        borderRadius:200
    }

})