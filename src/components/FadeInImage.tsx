import React,{ useState }  from 'react'
import {ActivityIndicator, Animated, View} from 'react-native';
import { useAnimation } from '../hooks/useAnimation';



interface Props{
    uri:string;
    style?:Object;
}


export const FadeInImage = ({uri,style={}}:Props) => {
   
    //state
    const [isLoading,setIsLoading] = useState(true);
    //ds uso de hook
    const {fadeIn} = useAnimation();
    

    const finishLoading = ()=>{
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>

            {
                isLoading && 
                <ActivityIndicator style={{position:'absolute'}} color='orange' size={50} />
            }
            <Animated.Image
                source={{uri}} 
                onLoadEnd={finishLoading}
                style={{
                  
                    width:'100%',
                    height:400,
                    
                }}  
            />
        </View>
        
    )
}
