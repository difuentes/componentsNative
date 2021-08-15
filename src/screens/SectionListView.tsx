import React from 'react'
import { Text, View,SectionList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { FooterTitle } from '../components/Footer';
import { HeaderTitle } from '../components/HeaderTitle';


interface Viajes {
    pais: string;
    data: string[];
}

const viajes: Viajes[] = [
    {
      pais: "EEUU",
      data: ["Centro Disney","Central Park", "Las vegas", "Miami",]
    },
    {
       pais: "Japon",
       data: ["Tokyo", "Kioto","Osaka" ]
    },
    {
        pais: "España",
        data: ["Valencia","Madrid" ]
    }
];



export const SectionListView = () => {
    return (
      
        <View>

                    <SectionList
                        renderSectionFooter={({section}) => <FooterTitle title={'Total : ' + section.data.length }/> }
                        sections={viajes}
                        ListHeaderComponent={()=>         
                        <View>
                            <HeaderTitle title="Viajes"/>
                            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#FFCB37',textTransform:'uppercase'}}></Text>
                            <Icon style={{textAlign:'center'}}  color="#FFCB37" name="heart" size={50}/>
                        </View>}
                        keyExtractor={(item,index)=> item + index}
                        renderItem={({item}) => (   
                            <View style={{justifyContent:"flex-start",flexDirection:'row',marginVertical:2,marginHorizontal:100}}>
                                 <View style={{marginTop:5,marginRight:10}}>
                                    <Icon color="#7D3C98" name="subway" size={20} />
                                </View>
                                <Text style={{textAlign:'center',marginVertical:3,fontSize:17}}>{item}</Text>
                            </View>
                        )}
                        renderSectionHeader={({section})=>(
                            <View style={{justifyContent:'flex-start',flexDirection:'row',marginHorizontal:50}}>
                                <View style={{marginTop:5,marginRight:10}}>
                                    <Icon color="#7D3C98" name="airplane" size={25} />
                                </View>
                              
                                <Text style={{textAlign:'center',color:'orange',fontWeight:'bold',fontSize:30}}>{section.pais}</Text>
                            </View>
                           
                        )}
                    />
            
            
        </View>
       
    )
}
