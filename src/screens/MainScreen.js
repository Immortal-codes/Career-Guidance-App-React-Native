

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {


    return (

        



            <View style={{
                flex: 1,
                backgroundColor: 'black', 
                // marginRight: 20
            }}>


                <View style={{
                    // backgroundColor:'black',
                    marginTop: 100,
                    height: 100,
                    marginRight:20

                }}>
                    <Text style={{
                        marginLeft: 60,
                        fontSize: 30,
                        color: 'white',
                    }}

                    >Choose Your Domain</Text>
                </View>



                <View style={{
                     justifyContent: 'center', 
                     marginTop: -70,
                    
                     }}>

               
                
                    <TouchableOpacity style={{
                        backgroundColor: '#0D63A5',
                        height: 160,
                        width: 160,
                        marginTop: 70,
                        marginLeft: 10,
                        margin:50,

                        // Shadow Styls

                        shadowColor: '#F0E3E3',
                        shadowOffset: { width: -11, height: 11 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        borderRadius: 20,



                        

                    }}
                    onPress={() => navigation.navigate('EducationScreen')}
                    >
                        <Text style={{
                            fontSize: 30,
                            marginTop: 60,
                            marginLeft: 15,
                            color:'white'
                        }}>
                            Education
                        </Text>
                    </TouchableOpacity>
                    

                    
                     <TouchableOpacity style={{
                        backgroundColor: '#0D63A5',
                        height: 160,
                        width: 160,
                        marginLeft: 200,
                        marginTop: -210,

                        // Shadow Styls

                        shadowColor: '#F0E3E3',
                        shadowOffset: { width: 11, height: 11 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        borderRadius: 20

                    }} 
                    
                    onPress={() => navigation.navigate('Sport')}
                    
                    >
                        <Text style={{
                            fontSize: 30,
                            marginTop: 60,
                            marginLeft: 40,
                            color:'white'
                        }}>
                            Sports
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#0D63A5',
                        height: 160,
                        width: 160,
                        marginLeft: 20,
                        marginTop: 25,

                        // Shadow Styls

                        shadowColor: '#F0E3E3',
                        shadowOffset: { width: -11, height: 11 },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        borderRadius: 20

                    }} 
                    
                    onPress={() => navigation.navigate('Bussiness')}
                    
                    >
                        <Text style={{
                            fontSize: 30,
                            marginTop: 60,
                            marginLeft: 15,
                            color:'white'
                        }}
                        >
                            Bussiness
                        </Text>
                    </TouchableOpacity >

                    <TouchableOpacity style={{
                        backgroundColor: '#0D63A5',
                        height: 160,
                        width: 160,
                        marginLeft: 200,
                        marginTop: -160,

                        // Shadow Styls

                        shadowColor: '#F0E3E3',
                        shadowOffset: { width: 11, height: 11, },
                        shadowOpacity: 0.3,
                        shadowRadius: 5,
                        borderRadius: 20
                    }} 
                    
                    onPress={() => navigation.navigate('MainScreenOther')}
                    
                    >
                        <Text style={{
                            fontSize: 30,
                            marginTop: 60,
                            marginLeft: 40,
                            color:'white',
                        }}>
                            Other
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
       

    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default HomeScreen;

