import * as React from 'react';
import {FlatList, Text, View } from 'react-native';



import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//interface
import { MenuItem } from '../interface/appInterfaces';
import { FlatListItem } from '../components/FlatListItem';

//objeto menu
const menuItem :MenuItem[]=[
    {
        name:"animacion 101",
        icon:"flame",
        components:"Animacion101",
        finalIcon:"arrow-forward"
    },
    {
        name:"animacion 102",
        icon:"battery-charging",
        components:"Animacion102",
        finalIcon:"arrow-forward"
    }
]

export const Home = () => {

    const {top} = useSafeAreaInsets();
  
    //render List header
    const renderListHeader = ()=>{
        return(
            <View style={{marginTop:top+25,marginBottom:20}}>
                <Text style={{...styles.title,color:'black'}}>Menu</Text>
            </View>
        )
    }

    //render separador
    const renderSeparador =()=>{
        return(
            <View style={{borderBottomWidth:1,borderBottomColor:'purple',marginVertical:5}}>
               
            </View>
        )
    }

    return (
        <View style={{flex:1, ...styles.globalMargin}}>
         
               <FlatList
               data={menuItem}
               renderItem={({item})=> <FlatListItem menuItem={item}/> }
               keyExtractor={(item)=> item.name}
               ListHeaderComponent={()=> renderListHeader()}
               ItemSeparatorComponent={()=> renderSeparador()}
               />
        </View>
    )
}

export default Home;