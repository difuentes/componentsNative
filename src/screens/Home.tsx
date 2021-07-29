import * as React from 'react';
import {FlatList, View } from 'react-native';

import { styles } from '../theme/appTheme';

//interface
import { FlatListItem } from '../components/FlatListItem';
import { menuItem } from '../data/menuItems';
import { HeaderTitle } from '../components/HeaderTitle';


//objeto menu

export const Home = () => {


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
               ListHeaderComponent={() => <HeaderTitle title="Menu"/> }
               ItemSeparatorComponent={()=> renderSeparador()}
               />
        </View>
    )
}

export default Home;