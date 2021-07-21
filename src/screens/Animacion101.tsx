import React, { useRef } from 'react'
import { View, StyleSheet ,Animated, Button, TouchableOpacity, Easing} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';


export const Animacion101 = () => {

    const {fadeIn,fadeOut,BounceOut,BounceIn,altura,opacidad} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity:opacidad,
                transform:[{
                    translateY:altura
                }]
            }}
            />



         <TouchableOpacity style={{...styles.button101}}>
           <Button
                color='black'
                title="FadeIn"
                onPress={fadeIn}
            />
         </TouchableOpacity>
         <TouchableOpacity style={{...styles.button101}}>
           <Button
                color='black'
                title="FadeOut"
                onPress={fadeOut}
            />
         </TouchableOpacity>

         <TouchableOpacity style={{...styles.button101}}>
           <Button
                color='black'
                title="BounceOut"
                onPress={BounceOut}
            />
         </TouchableOpacity>

         <TouchableOpacity style={{...styles.button101}}>
           <Button
                color='black'
                title="BounceIn"
                onPress={BounceIn}
            />
         </TouchableOpacity>



        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    },
    button101:{
        width:150,
        borderRadius:15,
        marginVertical:5,
        backgroundColor:'#B0FAF4',
        color:'white'
    },  
    purpleBox:{
        width:150,
        height:150,
        backgroundColor:'purple'
    }

})
