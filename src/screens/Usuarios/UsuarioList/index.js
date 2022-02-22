import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesmain from '../../Layout/stylesmain'
import styles from './styles'

export default function UsuarioList({navigation}) {
    
    const DATA = [
        {
            id: '1',
            email: 'joao@ifpr.edu.br',
            senha: 'ultrasecreto',
            nome: 'Joao',
        },
        {
            id: '2',
            email: 'maria@ifpr.edu.br',
            senha: 'ultrasecreto2',
            nome: 'Maria',
        },
        {
            id: '3',
            email: 'joana@ifpr.edu.br',
            senha: 'ultrasecreto3',
            nome: 'Joana',
        },
        {
            id: '4',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '5',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '6',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '7',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '8',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '9',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
        {
            id: '10',
            email: 'anacleto@ifpr.edu.br',
            senha: 'ultrasecreto4',
            nome: 'Anacleto',
        },
    ];
function userEdit() {
    // navigation.navigate('UserEdit')
    Alert.alert(JSON.stringify(navigation))
}

const renderItem = ({ item}) => (
    <TouchableOpacity style={styles.item}  onPress={() => userEdit()}>
        <View style={styles.itemEmail}>
        <Text style={styles.textItemEmail}>{item.email}</Text>
        </View>
        <View style={styles.row} >
                <View style={styles.itemCodigo} >
                    <Text style={styles.textItemCodigo}>{item.id}</Text>
                </View>
                <View style={styles.itemNome}>
                    <Text style={styles.textItemNome}>{item.nome}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

    return (
        <View style={stylesmain.container}>
            <View style={styles.container}>

                <Text style={styles.header}>Usuarios</Text>
                <Button
                    title="Go to Details"
                    onPress={() => userEdit() }
                />
                <View style={styles.viewFlatList}>
                    <SafeAreaView>
                        <FlatList
                            style={styles.flatList}
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </View>
            </View>
        </View>
    )
}