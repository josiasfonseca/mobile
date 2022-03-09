import * as React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Button, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesmain from '../../Layout/stylesmain'
import styles from './styles'

export default function UsuarioEdit({ route, navigation }) {

    const [user, setUser] = useState(route.params.user)

    function salvar() {
        Alert.alert('Nome: ' + user.nome + '\nEmail: ' + user.email + '\nID: ' + user.nome)
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={stylesmain.container}>
                <View style={styles.container}>
                    <View style={styles.title}>
                        <View>
                            <Text style={styles.header}>Edição de Usuário</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.viewCodigo} >
                            <TextInput style={styles.inputTextCodigo}
                                value={user.id}
                                placeholderTextColor="#cccccc"
                                placeholder="Código"
                                maxLength={10}
                                isReadonly
                            />
                        </View>
                        <View style={styles.viewNome}>
                            <TextInput style={styles.inputTextNome}
                                value={user.nome}
                                placeholderTextColor="#cccccc"
                                placeholder="Nome"
                                maxLength={100}
                                onChangeText={(text) => setUser({ ...user, nome: text })}
                            />
                        </View>
                        <View style={styles.viewEmail}>
                            <TextInput style={styles.inputTextEmail}
                                value={user.email}
                                placeholderTextColor="#cccccc"
                                placeholder="Email"
                                maxLength={100}
                                onChangeText={(text) => setUser({ ...user, email: text })}
                            />
                        </View>
                        <View>

                            <View style={styles.viewButtonSalvar}>
                                <TouchableOpacity
                                    style={styles.inputButtonSalvar}
                                    onPress={() => salvar()}
                                >
                                    <Text style={styles.textButtonSalvar}>
                                        Salvar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}