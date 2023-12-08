import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const ScienceGraduate = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>

            <ScrollView>

                <View style={{
                    margin: 50,

                }}>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 20 }}>After Graduation in Science</Text>
                </View>

                <View style={{
                    marginTop: 0,
                    marginLeft: 20
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20
                    }}>

                        1. Master of Science (MS/MSc) {'\n'}{'\n'}
                        2. Master of Technology (MTech)/Master of Engineering (MEng){'\n'}{'\n'}
                        3. Master of Computer Applications (MCA){'\n'}{'\n'}
                        4. Master in Computer Science{'\n'}{'\n'}
                        5.  PG Diploma in Business Analytics{'\n'}{'\n'}
                        6. Paramedical Courses{'\n'}{'\n'}
                        7. PG Diploma in Hospital Management/Hospital Administration{'\n'}{'\n'}
                        8. MBA (Master of Business Administration){'\n'}{'\n'}
                        9. Financial Engineering Courses{'\n'}{'\n'}
                        10. Mobile App Development Courses{'\n'}{'\n'}
                        11. Robotics Engineering Courses{'\n'}{'\n'}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScienceGraduate

const styles = StyleSheet.create({})