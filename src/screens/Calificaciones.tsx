import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import GetNota from '../components/GetNota'

const Calificaciones = () => {


    const [estudiante, setEstudiante] = useState<string>('')

    const [estudiantes, setEstudiantes] = useState<string[]>([])

    const [primerNota, setPrimerNota] = useState('')

    const [segundaNota, setSegundaNota] = useState('')

    const [notaFinal, setnotaFinal] = useState<string[]>([])

    const ValidarNota = () => {
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
                    onPress={ValidarNota}
                />
            </View>
            <View style={styles.containerNota}>
                <GetNota
                    title={"IP"}
                    placeholder={"IP"}
                    onChangeText={setPrimerNota}
                />
                <GetNota
                    title={"IIP"}
                    placeholder={"IIP"}
                    onChangeText={setSegundaNota}
                />
                <TouchableOpacity
                    onPress={ValidarNota}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Agregar</Text>
                </TouchableOpacity>
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

    },
    containerNota: {
        width: '50%',
        marginBottom: 20,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        marginLeft: 30,
    },
    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '60%',
        paddingVertical: 7,
        marginTop: 5
    },
    textbotonReset: {
        color: '#05786A',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10

    }


})
