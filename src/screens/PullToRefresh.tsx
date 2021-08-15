import React,{ useState }  from 'react'
import { View ,ScrollView,RefreshControl, Text} from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderTitle } from '../components/HeaderTitle'



export const PullToRefresh = () => {

    const [refresh,setrefresh]=useState(false);
    const [data,setdata]= useState <string>()
    const {top} = useSafeAreaInsets();
    const onRefresh=()=>{
        setrefresh(true);
        setTimeout(()=>{
            setrefresh(false)
            setdata('Demilio')
        },1500)
    }

    return (
        <SafeAreaView >
            <ScrollView style={{marginTop:refresh ? top : 0 }}
            refreshControl={
                <RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="purple"//android
                    colors={['purple','orange']}//android arreglo de colores
                    //style={{backgroundColor:"white"}}
                    //tintColor="orange"
                    title="Recargando"
                />
            }>
                <View>
                    <HeaderTitle title="Pull To Refresh"/>
                    {
                        data &&  <HeaderTitle title={data}/>
                    }
                  
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
