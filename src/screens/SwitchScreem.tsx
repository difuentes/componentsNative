import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreem = () => {

    const [state, setstate] = useState({
        isActive:true,
        isHungry:false,
        isHappy:true
    });

    const {isActive,isHungry,isHappy} = state;

    const onChange = (value:boolean,field:string)=>{
        setstate({
            ...state,
            [field]:value
        });
    }

    return (
        <View style={styles.container}>
            <HeaderTitle title="Switch"/>

            <View style={styles.flexrow}>
                <Text style={styles.titleSwitch}>isActive</Text>
                <CustomSwitch onChange={(value)=>onChange(value,'isActive')} isOn={isActive} />
            </View>
            
            <View style={styles.flexrow}>
                <Text style={styles.titleSwitch}>isHungry</Text>
                <CustomSwitch onChange={(value)=>onChange(value,'isHungry')} isOn={isHungry} />
            </View>
    
            <View style={styles.flexrow}>
                <Text style={styles.titleSwitch}>isHappy</Text>
                <CustomSwitch onChange={(value)=>onChange(value,'isHappy')} isOn={isHappy} />
            </View>


            <Text  style={{marginTop:20}}> 
                {JSON.stringify(state,null,5)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start'
    }, 
    flexrow:{
        flexDirection:'row',
        marginTop:15
    },
    array:{
        fontSize:25
    },
    titleSwitch:{
        marginRight:10,
        marginTop:4,
        fontSize:18
    }
})