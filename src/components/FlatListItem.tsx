import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View ,Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interface/appInterfaces';
import { styles } from '../theme/appTheme';


interface Props{
    menuItem:MenuItem
}

export const FlatListItem = ({menuItem}:Props) => {

    const navigation = useNavigation();

    return (



        <TouchableOpacity 
         activeOpacity={0.5}
         onPress={()=>navigation.navigate(menuItem.components)}
        >
            <View style={stylesFlat.container}>
                <Icon name={ menuItem.icon } size={25} color='purple'/> 
                <Text style={styles.letterMenu}>   {menuItem.name}</Text>
                <View style={{flex:1}}/>
                <Icon name={ menuItem.finalIcon } size={25} color='purple'/> 
            </View>
        </TouchableOpacity>

    )
}

const stylesFlat = StyleSheet.create({
    container:{
        flexDirection:'row'
    }
})
