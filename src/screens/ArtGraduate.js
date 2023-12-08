import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const ArtGraduate = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>

<ScrollView>

            <View style={{
                margin: 50,

            }}>
                <Text style={{ color: 'white', fontSize: 20,marginLeft:40 }}>After Graduation in Arts</Text>
            </View>

            <View style={{
                marginTop: 0,
                marginLeft: 20
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 20
                }}>

                    1. Master of Business Administration (MBA){'\n'}{'\n'}
                    2. Master of Arts (MA) or Master of Fine Arts (MFA){'\n'}{'\n'}
                    3. PG Diploma/Masters in Journalism and Communication{'\n'}{'\n'}
                    4. Bachelor of Education (BEd){'\n'}{'\n'}
                    5. Bachelor of Library Science{'\n'}{'\n'}
                    6. Masters/PG Diploma in Digital Marketing{'\n'}{'\n'}
                    7. LLB{'\n'}{'\n'}
                    8. Foreign Language Courses{'\n'}{'\n'}
                    9. PG Diploma in Management (PGDM){'\n'}{'\n'}
                    10. PG Diploma in Business Analytics (PGDBA){'\n'}{'\n'}
                    11. PG Diploma in Digital Marketing{'\n'}{'\n'}
                    12. PGDEMA{'\n'}{'\n'}

                </Text>
            </View>
            </ScrollView>
        </View>
    )
}

export default ArtGraduate

const styles = StyleSheet.create({})