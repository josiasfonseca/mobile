import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, TouchableOpacity, ToastAndroid, Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

import {
    Button,
    Text,
    TextInput
} from 'react-native-paper';
export default function UsuarioEdit({ route, navigation }) {

    const [user, setUser] = useState(usuario)
    const [userList, setUserList] = useState([])

    const usuario = {
        id: '',
        nome: '',
        email: ''
    }

    useEffect(async () => {
        if (route.params.usuario.id)
            setUser({ ...route.params.usuario })
        else
            setUser({ ...usuario })

        const usu = await AsyncStorage.getItem('usuarios')
        const u = usu ? JSON.parse(usu) : null

        setUserList(u)
    }, [route])


    const onChangeValueInput = (key, value) => {
        setUser({ ...user, [key]: value })
    }

    async function salvar() {
        ToastAndroid.show('Salvando...', ToastAndroid.SHORT)

        if (user.id && user.id != '') {
            if (userList.length > 0) {
                const copy = userList
                const indexUser = copy.findIndex(e => e.id == user.id)
                if (indexUser > -1)
                    copy.splice(indexUser, 1)

                copy.push(user)
                setUserList({ ...copy })
                // console.log(userl)
            } else {
                console.log('incluindo', user)
                setUserList({ ...user })
            }
        } else {
            ToastAndroid.show(`Informe o ID do usuário `, ToastAndroid.LONG)
            return
        }


        // await AsyncStorage.removeItem('usuarios')
        await AsyncStorage.setItem('usuarios', JSON.stringify(userList))

        console.log('USER LIST', userList)
        navigation.reset({
            index: 0,
            routes: [{ name: 'UsuarioList' }],
        })      
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.inputText}>
                        <TextInput
                            dense
                            activeOutlineColor="#0e0e0e"
                            placeholderTextColor="#000"
                            label="ID"
                            mode="outlined"
                            maxLength={10}
                            keyboardType='numeric'
                            value={user && user.id ? user.id.toString() : ''}
                            onChangeText={(text) => onChangeValueInput('id', text)}
                        />
                    </View>
                    <View style={styles.inputText}>
                        <TextInput
                            dense
                            activeOutlineColor="#0e0e0e"
                            placeholderTextColor="#cccccc"
                            label="Nome"
                            mode="outlined"
                            maxLength={45}
                            value={user && user.nome ? user.nome.toString() : ''}
                            onChangeText={(text) => onChangeValueInput('nome', text)}
                        />
                    </View>
                    <View style={styles.inputText}>
                        <TextInput
                            dense
                            activeOutlineColor="#0e0e0e"
                            placeholderTextColor="#cccccc"
                            label="Email"
                            mode="outlined"
                            maxLength={45}
                            value={user && user.email ? user.email.toString() : ''}
                            onChangeText={(text) => onChangeValueInput('email', text)}
                        />
                    </View>
                    <View>

                        <View style={styles.buttons}>
                            <View style={styles.viewButtonCancelar}>
                                <Button
                                    style={styles.buttonCancelar}
                                    icon="backspace"
                                    // labelStyle={{ fontSize: 15}}
                                    mode="contained"
                                    color="#B22222"
                                    onPress={() => navigation.goBack()}>
                                    Cancelar
                                </Button>
                            </View>
                            <View style={styles.viewButtonSalvar}>
                                <Button
                                    style={styles.buttonSalvar}
                                    icon="content-save"
                                    // labelStyle={{ fontSize: 15 }}
                                    mode="contained"
                                    color="#3CB371"
                                    onPress={() => salvar()}>
                                    Salvar
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}