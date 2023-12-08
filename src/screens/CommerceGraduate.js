import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
const CommerceGraduate = () => {
    return (
        <View style={{
            backgroundColor: 'black',
            flex: 1
        }}>

            <ScrollView>

                <View style={{
                    margin: 50,

                }}>
                    <Text style={{ color: 'white', fontSize: 20, marginLeft: 0 }}>After Graduation in Commerce</Text>
                </View>

                <View style={{
                    marginTop: 0,
                    marginLeft: 20
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20
                    }}>

                        1. Chartered Accountancy (CA){'\n'}{'\n'}
                        2. M.Com{'\n'}{'\n'}
                        3. MBA{'\n'}{'\n'}
                        4. MCA{'\n'}{'\n'}
                        5. PGDCA (Post Graduate Diploma in Computer Applications){'\n'}{'\n'}
                        6. Chartered Financial Analyst (CFA){'\n'}{'\n'}
                        7. Business Accounting and Taxation (BAT){'\n'}{'\n'}
                        8. Tally Course{'\n'}{'\n'}
                        9. Masters in Digital Marketing{'\n'}{'\n'}
                        10. PGDM in Finance{'\n'}{'\n'}
                        11. PGDEMA{'\n'}{'\n'}
                        12. Certification Courses for Commerce Students like Certificate in E-commerce, Certificate in Banking, Certificate in Accounting, etc.{'\n'}{'\n'}
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default CommerceGraduate

const styles = StyleSheet.create({})