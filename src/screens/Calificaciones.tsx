import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'

const Calificaciones = () => {


    const [estudiante, setEstudiante] = useState<string>('')

    const [estudiantes, setEstudiantes] = useState<string[]>([])

    const crearTarea = () => {
        setEstudiantes([...estudiantes, estudiante])
    }

    return (
        <View style={styles.containerBase}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputs}
                    onChangeText={setEstudiante}
                />
                <Button
                    title="Agregar"
                    onPress={crearTarea}
                />
            </View>
            <View>
                
            </View>
            <ScrollView>

                {
                    estudiantes.map((lista, index) => (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text} >{lista}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Calificaciones

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#3492eb',
        marginTop: 40,
    },
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        fontSize: 22,
        color: '#034C50',
        width: '70%'
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#FFFFFF',

    }

})
