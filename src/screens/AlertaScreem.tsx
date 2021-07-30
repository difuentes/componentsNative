import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, View,Alert ,Text} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

import prompt from 'react-native-prompt-android';

export const AlertaScreem = () => {
    

    const showAlert = () =>{
        Alert.alert(
            "Buenas noches ",
            "estas muy linda !! ",
            [
              {
                text: "<3 ",
                onPress: () => console.log("Cancel Pressed"),
                style: "destructive"
              },
              { text: "<3", onPress: () => console.log("OK Pressed") }
            ]
          );
    }

    const showPrompt = () => {
        /*
        Alert.prompt(
            'Mensaje oculto ','',(valor:string)=> console.log('valor',{valor}),
            'secure-text'
        )
        */
        prompt(
            'Mensaje oculto',
            'asi que shh shh nadie lo sabra',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }

    return (
        <View style={styles.container}>
            <HeaderTitle title="Alerta"/>
            <TouchableOpacity  style={{backgroundColor:'orange' , borderRadius:20,marginHorizontal:50,paddingVertical:5}}>
                <Button
                    color='white'
                    title="Mostrar Alerta"
                    onPress={showAlert}
                />
            </TouchableOpacity>

            <Text style={{fontSize:40,textAlign:'center',marginVertical:20,fontWeight:'bold'}}>Props </Text>
            <TouchableOpacity  style={{backgroundColor:'orange' , borderRadius:20,marginHorizontal:50,paddingVertical:5}}>
                <Button
                    color='white'
                    title="Mostrar Prop"
                    onPress={showPrompt}
                />
            </TouchableOpacity>
        </View>
    )
}

