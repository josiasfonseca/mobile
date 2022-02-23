import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, Button, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import stylesmain from '../../Layout/stylesmain'
import styles from './styles'

export default function UsuarioEdit({ route, navigation }) {

    const user = route.params.user
    // Alert.alert(JSON.stringify(route.params.user))
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
                                maxLength={20}
                                isReadonly
                            />
                        </View>
                        <View style={styles.viewNome}>
                            <TextInput style={styles.inputTextNome}
                                value={user.nome}
                                placeholderTextColor="#cccccc"
                                placeholder="Nome"
                                maxLength={20}
                            />
                        </View>
                        <View style={styles.viewEmail}>
                            <TextInput style={styles.inputTextEmail}
                                value={user.email}
                                placeholderTextColor="#cccccc"
                                placeholder="Email"
                                maxLength={20}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}