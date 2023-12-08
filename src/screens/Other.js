import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import React from 'react'

const Other = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1,
        }}>

            <ScrollView>
                <View style={{
                    marginTop: 70,
                    marginLeft: 30
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>professional courses to pursue after 12th</Text>
                </View>


                <View style={{
                    marginTop: 40,
                    marginLeft: 15
                }}>
                    <Text style={{

                        fontSize: 18,
                        color: 'white'



                    }}>
                        1. CA- Chartered Accountancy {'\n'}{'\n'}
                        2. CS- Company Secretary{'\n'}{'\n'}
                        3. Certificate Courses {'\n'}{'\n'}
                        4. Bachelor in Foreign Language{'\n'}{'\n'}
                        5. Diploma Courses{'\n'}{'\n'}
                        6. Advanced Diploma Courses{'\n'}{'\n'}
                        7. Bachelor of Design in Accessory Design, fashion Design, Ceramic Design, Leather Design, Graphic Design, Industrial Design, Jewellery Design{'\n'}{'\n'}

                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({})