import * as React from 'react';
import {FlatList, Text, View } from 'react-native';



import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//interface
import { FlatListItem } from '../components/FlatListItem';
import { menuItem } from '../data/menuItems';

//objeto menu

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