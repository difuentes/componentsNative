import React from 'react'
import { View, Text } from 'react-native';
import {styles} from '../theme/appTheme';

interface Props{
    title: string;
}

export const FooterTitle = ({title}:Props) => {
    return (
        <View style={{marginBottom:20,marginTop:5}}>
            <Text style={{...styles.title,color:'orange'}}>{title}</Text>
        </View>
    )
}
