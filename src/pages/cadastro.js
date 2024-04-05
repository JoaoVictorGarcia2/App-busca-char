import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
    const [ nome, setNome] = useState('');
    const [ telefone, setTelefone ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ curso, setCurso ] = useState('');

    const navigation = useNavigation()

    const handleCadastro = () => {
        navigation.navigate('login');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={ styles.input }
                placeholder="Nome"
                secureTextEntry={true}
                value={nome}    
                onChangeText={setNome}
            />
            <TextInput
                style={ styles.input }
                placeholder="Telefone"
                value={telefone}    
                onChangeText={setTelefone}
            />
            <TextInput
                style={ styles.input }
                placeholder="CPF"
                value={cpf}    
                onChangeText={setCpf}
            />
            <TextInput
                style={ styles.input }
                placeholder="E-mail"
                value={email}    
                onChangeText={setEmail}
            />
            <TextInput
                style={ styles.input }
                placeholder="Curso"
                value={curso}    
                onChangeText={setCurso}
            />
            <TouchableOpacity style={styles.button} onPress={handleCadastro} >
                <Text style={ styles.buttonText }>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    button: {
        backgroundColor: "#3498db",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default Cadastro;