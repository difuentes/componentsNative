import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Animacion102 = () => {
    return (
        <View style={{...styles.container}}>
            <View style={styles.purpleBox}>

            </View>
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
        backgroundColor:'purple'
    }

})