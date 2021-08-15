import React,{useState} from 'react'
import { View,FlatList, Text, Image, ActivityIndicator } from 'react-native'
import { FadeInImage } from '../components/FadeInImage'
import { HeaderTitle } from '../components/HeaderTitle'




export const InfiniteScroll = () => {

    const [numbers,setNumbers] = useState([1,2,3,4,5])

    const loadMore = ( ) =>{
        const newArray :number[]=[];
        for (let i = 0; i < 5; i++) {
          newArray[i] = numbers.length + i;
            
        }
        
        setTimeout(()=>{
            setNumbers([...numbers,...newArray])
        },2000)
        
    }

    const renderItem=(item:number)=>{
        return(

           // <Image 
           //    style={{width:'100%',height:300}}
           //    source={{uri:`https://picsum.photos/id/${item}/500/400`}}
           // />
           <FadeInImage
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{
                with:'100%',
                height:400
            }}
           />
        )
    }

    return (

        <View style={{flex:1}}> 
            <FlatList
                data={numbers}
                keyExtractor={(item)=>item.toString()}
                renderItem={({item})=> renderItem(item)}
                ListHeaderComponent={()=> (
                    <View style={{marginHorizontal:20}}>
                        <HeaderTitle title="infinite"/>
                    </View>
                   
                )}
                onEndReached={loadMore}//Elementos para volver a cargar
                onEndReachedThreshold={0.4}//distancia antes del final para recargar
                ListFooterComponent={()=>(
                    <View style={{height:500,justifyContent:'center',width:'100%'}}>
                        <ActivityIndicator size={20} color='orange' />
                    </View>
                ) }
            />
        </View>
    )
}
