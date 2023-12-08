// WelcomeScreen.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <Image
                source={require('../images/logo.jpg')}
                style={styles.image}
            />

            <Text style={{ color: 'powderblue', fontSize: 25, marginTop: -180, marginLeft: 110 }}>
                Welcome to CGA 
            </Text>

            {/* <Text style={{color:'powderblue', fontSize:25, marginLeft:70, marginTop:10}}> "Career Guidance App"</Text> */}

            <TouchableOpacity style={{ 
                backgroundColor: 'white',
                height: 40,
                width: 120, 
                marginLeft: 140,
                marginVertical: 30, 
                borderRadius: 10 
            }} 
            onPress={() => navigation.navigate('MainScreen')} >

            <Text style={{
                fontSize: 20,
                color: 'black',
                marginLeft: 10, 
                alignItems: 'center', 
                marginTop: 7 }}
                   >
                    Let's Begin
            </Text>

            </TouchableOpacity>
        </View >

    );
};

export default WelcomeScreen




const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        flex: 1,
    },


    image: {

        height: 300,
        width: 300,
        alignContent: 'center',
        alignItems: 'center',
        margin: 45,
        marginVertical: 150



    }
})