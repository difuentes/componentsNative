import React from 'react'
import { StyleSheet,ScrollView, View,TextInput, Text,Keyboard ,KeyboardAvoidingView,TouchableWithoutFeedback, Platform, Switch} from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'

import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';


export const FormInput = () => {

    const{form,onChange,isSuscribe } = useForm({
        nombre:'',
        edad:'',
        correo:'',
        isSuscribe:false
    });


    return (
       
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}        
        >
         <ScrollView>
         
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <HeaderTitle  title="Formulario"/>
                <View style={stylesFor.margin}>
                    <Text style={stylesFor.textForm} >Nombre:</Text>
                    <TextInput
                        style={stylesFor.input}
                        keyboardType="default"
                        placeholder="Ingresa tu nombre"
                        autoCorrect={false}
                        
                        autoCapitalize="words"
                        onChangeText={(value)=>onChange(value,'nombre')}
                    />
                </View>
                
                <View style={stylesFor.margin}>
                    <Text style={stylesFor.textForm} >Correo:</Text>
                        <TextInput
                            keyboardType="email-address"
                            style={stylesFor.input}
                            placeholder="Ingresa tu Correo"
                            autoCorrect={false}
                            autoCapitalize="words"
                            onChangeText={(value)=>onChange(value,'correo')}
                        />
                </View>
                <View style={stylesFor.margin}>
                    <Text style={stylesFor.textForm} >Edad:</Text>
                        <TextInput
                            keyboardType="numeric"
                            style={stylesFor.input}
                            placeholder="Ingresa tu edad"
                            autoCorrect={false}
                            onChangeText={(value)=>onChange(value,'edad')}
                        
                        />
                </View>

                <View style={stylesFor.marginRow}>
                    <Text style={stylesFor.textForm} >Subcribir:</Text>
                    <View style={{marginLeft:155}}>
                        <CustomSwitch  onChange={(value)=>onChange(value,'isSuscribe')} isOn={isSuscribe} />
                    </View>
                  
                </View>
               
                    <Text style={stylesFor.textview}>Nombre: {form.nombre} </Text>
                    <Text  style={stylesFor.textview}>Correo: {form.correo}</Text>
                    <Text style={stylesFor.textview}>Edad: {form.edad}</Text>
                    <View style={{height:20}}/>
            </View>
            </TouchableWithoutFeedback>
         
         </ScrollView>
        </KeyboardAvoidingView>
      
    )
}

const stylesFor = StyleSheet.create({
    margin:{
        marginVertical:0
    },
    marginRow:{
        flexDirection:'row'
    },
    textview:{
        color:'black',
        fontSize:25,
        marginVertical:10,
        fontWeight:'bold',
        marginLeft:20,
       
    },
    textForm:{
        marginLeft:50,
        fontWeight:'bold',
        fontSize:18,
        color:'#5B2C6F',
        marginTop:5
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginHorizontal:50,
      borderColor:'purple',
      borderRadius:10
    },
  });