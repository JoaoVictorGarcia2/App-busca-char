import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Gif from "./gif";

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigation = useNavigation()

    const handleLogin = () => {
        if (email === '' && password === ''){
            navigation.navigate('main')
        } else {
            alert('E-mail ou senha inválidos!')
        }
    }

    const handleCadastro = () => {
        navigation.navigate('cadastro')
    }

    return (
     
        <View style={styles.container}>
        
        <Gif/>
            <TextInput
                style={ styles.input }
                placeholder="E-mail"
                value={email}    
                onChangeText={setEmail}
            />
            <TextInput
                style={ styles.input }
                placeholder="Senha"
                secureTextEntry={true}
                value={password}    
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text style={ styles.buttonText }>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonCad} onPress={handleCadastro} >
                <Text style={ styles.buttonTextCad }>Cadastrar usuario</Text>
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
        backgroundColor: "#00FF00",
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 5,
    },
    buttonCad: {
        backgroundColor: "white",
        padding: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 5,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    },
    buttonTextCad: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default Login;