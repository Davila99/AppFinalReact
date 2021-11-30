import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

interface Props {
    title: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}


const GetNota = ({ title, placeholder, onChangeText }: Props) => {
    return (
        <View>
            <Text></Text>
            <TextInput>


            </TextInput>
        </View>
    )
}

export default GetNota

const styles = StyleSheet.create({

})
