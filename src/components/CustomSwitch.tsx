import React,{useState} from 'react';
import {  Switch, View  } from 'react-native';

interface Props{
    isOn: boolean;
    onChange: (value:boolean) => void;
}

export const CustomSwitch = ({isOn,onChange}:Props) => {
    
    const [isEnable, setIsEnable] = useState(isOn);
    
    const toggleSwitch =()=>{
        setIsEnable(!isEnable);
        onChange(!isEnable);
    }

    return (
        <View>
            <Switch
                        trackColor={{ false: "#F7DC6F", true: "#D35400" }}
                        thumbColor={isEnable ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#F7DC6F"
                        onValueChange={toggleSwitch}
                        value={isEnable}
            />
        </View>  
        
    )
}
