import React, { useState, useEffect } from 'react'
import { View, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { ActivityIndicator, Button, DataTable, FAB, Portal, Provider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './styles'

export default function UsuarioList({ navigation, route }) {

    const [userList, setUserList] = useState([])
    const [visibleActivityIndicator, setVisibleActivityIndicator] = useState(false)

    const users = [
        {
            id: '1',
            email: 'joao@ifpr.edu.br',
            nome: 'Joao',
        },
        {
            id: '2',
            email: 'maria@ifpr.edu.br',
            nome: 'Maria',
        },
        {
            id: '3',
            email: 'joana@ifpr.edu.br',
            nome: 'Joana',
        },
        {
            id: '4',
            email: 'anacleto@ifpr.edu.br',
            nome: 'Anacleto',
        },
    ];

    useEffect(async () => {
        const usu = await AsyncStorage.getItem('usuarios')
        const u = usu ? JSON.parse(usu) : null

        if (u)
            setUserList(u)
        else
            setUserList(users)

        AsyncStorage.setItem('usuarios', JSON.stringify(userList))
        
    }, [route.params])


    const elements = []
    const toRenderItems = async () => {
        console.log('LENGTH', userList)
        for (let i = 0; i < userList.length; i++) {
            elements.push(userList[i])
        }
    }
    toRenderItems()
    

    const navigateToEdit = async (usuario) => {
        await AsyncStorage.setItem('usuarios', JSON.stringify(userList))

        navigation.navigate('UsuarioEdit', { usuario: usuario })
    }

    const confirmToDeleteUser = async (u) => {
        Alert.alert(
            "Exclusão",
            "Confima exclusão do usuário " + u.id + ' ?',
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteUser(u.id) }
            ]
        );
    }

    const deleteUser = async (id) => {
        setVisibleActivityIndicator(true)
        // ToastAndroid.show(`Usuário ${id} excluído com sucesso!`, ToastAndroid.LONG)
        const indexUser = userList.findIndex(e => e.id == id)
        const copy = userList
        copy.splice(indexUser, 1)

        setUserList({ ...copy })

        setVisibleActivityIndicator(false)
    }


    function renderDataItem(usuarioRow, index) {
        return (
            <DataTable.Row key={index}>
                <DataTable.Cell numeric style={styles.cellId}>{usuarioRow.id}</DataTable.Cell>
                <DataTable.Cell style={styles.cellNome}>{usuarioRow.nome}</DataTable.Cell>
                <DataTable.Cell style={styles.cellAcao}>
                    <View style={styles.viewButtonEdit}>
                        <Button
                            mode="text"
                            compact={true}
                            icon="pencil"
                            style={styles.buttonEdit}
                            labelStyle={{ fontSize: 30 }}
                            color="#2C3E50"
                            onPress={() => navigateToEdit(usuarioRow)} />
                    </View>
                    <View style={styles.viewButtonDelete}>
                        <Button
                            mode="text"
                            compact={true}
                            icon="trash-can-outline"
                            style={styles.buttonDelete}
                            labelStyle={{ fontSize: 30 }}
                            color="#943126"
                            onPress={() => confirmToDeleteUser(usuarioRow)} />
                    </View>
                </DataTable.Cell>
            </DataTable.Row>
        )
    }
    return (

        <View style={styles.container}>

            <DataTable style={styles.datatable}>
                <DataTable.Header>
                    <DataTable.Title numeric style={styles.titleId}>ID</DataTable.Title>
                    <DataTable.Title style={styles.titleNome}>Nome</DataTable.Title>
                    <DataTable.Title style={styles.titleAcao}>Ação</DataTable.Title>
                </DataTable.Header>

                <ScrollView>
                    <View>
                        {elements.map((item, index) => renderDataItem(item, index))}
                    </View>

                </ScrollView>
            </DataTable>
            <Provider>
                <Portal>
                    <FAB
                        style={styles.fab}
                        open={false}
                        icon='plus'
                        color="#fff"
                        onPress={() => navigateToEdit({})}
                    />
                </Portal>
            </Provider>
            {
                visibleActivityIndicator &&
                <View style={styles.loading}  >
                    <ActivityIndicator color='#13B58C' />
                </View>
            }
        </View>
    )
}