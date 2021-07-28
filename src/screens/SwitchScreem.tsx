import React , { useState }from 'react'
import { Text, View, StyleSheet,Switch } from 'react-native';

export const SwitchScreem = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View style={styles.container}>
            <Text>Switch</Text>
            <Switch
                trackColor={{ false: "#F7DC6F", true: "#D35400" }}
                thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#F7DC6F"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    }, 
})