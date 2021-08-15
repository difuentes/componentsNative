import React from 'react'
import { Button, View, Alert, Modal, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';
import { HeaderTitle } from '../components/HeaderTitle'
import { useState } from 'react';



export const ModalView = () => {

    const [isVisible,setVisible] = useState(false);

    return (
        <View >
            <HeaderTitle title={"Modal"}/>

        <View style={ styles.container}>
            <TouchableOpacity style={styles.orangeBox}>
                {/*Button*/}
                <Button
                    color="white"
                    title="Galaxia"
                    onPress={()=> setVisible(true)}
                />
                <Icon name="planet" size={25} color="white" style={{marginTop:5}}/>
                   
                <Modal 
                    animationType="slide"
                    visible={isVisible}
                    transparent={true}
                >   
                     {/*bg Modal*/}
                    <View style={{
                        flex:1,
                        backgroundColor:'rgba(0,0,0,0.3)',
                        alignContent:'center',
                        alignItems:'center'
                        }}>

                        {/*contenido Modal*/}
                        <View style={{backgroundColor:'black',height:350,marginTop:200,width:'100%'}}>
                            <View style={{ alignItems:'flex-end'}}>
                                 <Icon name="moon" size={65} color="yellow" />
                            </View>
                          
                            <Icon name="planet" size={65} color="orange" />
                            <View style={{ alignItems:'center'}}>
                                <TouchableOpacity style={styles.btnGalaxy}>
                                    <Button
                                        title="cerrar"
                                        color="orange"
                                        onPress={()=>setVisible(false)}
                                    />
                                </TouchableOpacity>
                            </View>
                           
                            <Icon name="star" size={55} color="yellow" style={{marginHorizontal:40,marginTop:20}}/>
                            <View style={{ alignItems:'flex-end'}}>
                                 <Icon name="rocket" size={65} color="#9B59B6" />
                            </View>
                        </View>
                    </View>
                    
                </Modal>
            </TouchableOpacity>
            
        </View>
          

        </View>
    )
}

const styles = StyleSheet.create({
    btnGalaxy:{
        backgroundColor:'white',
        width:200,
        borderRadius:20,
      
    },
    container:{
        justifyContent:'center',
        flexDirection:'row'
    },
    orangeBox:{
        width:180,
        height:40,
        borderRadius:15,
        marginVertical:5,
        backgroundColor:'orange',
        color:'white',
        flexDirection:'row',
        justifyContent:'center'
    }
})