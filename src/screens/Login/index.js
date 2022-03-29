import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from 'react-native'
import { TextInput } from 'react-native'
import styles from './styles'
import { faArrowRightToFile } from '@fortawesome/free-solid-svg-icons'
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { realizarLogin } from '../../api/LoginService/'

export default function Login({ navigation }) {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)

  async function auth() {
    await AsyncStorage.removeItem('usuarios')
    if (user == null || password == null) {
      Alert.alert('Informe o usuário e a senha!')
      return
    }
     await realizarLogin(user, password)
      // .then((res) => res.json())
      .then((res) => {
        ToastAndroid.show('Login realizado', ToastAndroid.LONG)
        navigation.reset({
          index: 0,
          routes: [{ name: 'UsuarioList' }],
        })
      })
      .catch(() => ToastAndroid.show('Erro ao realizar login', ToastAndroid.LONG))
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}
      >
        <View>
          <View style={styles.title}>
            <View>
              <Text style={styles.messageTitle}>IFPR</Text>
            </View>
            <View>
              <Text style={styles.messageTitle1}>Foz do Iguaçu</Text>
            </View>
          </View>
          <View>
            <View style={styles.inputUsuario}>
              <TextInput
                style={styles.inputTextUsuario}
                placeholderTextColor="#cccccc"
                placeholder="Usuário"
                onChangeText={(text) => setUser(text)}
                maxLength={20}
              />
            </View>
            <View style={styles.inputSenha}>
              <TextInput
                style={styles.inputTextSenha}
                placeholderTextColor="#cccccc"
                placeholder="Senha"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                maxLength={20}
              />
            </View>
          </View>
          <View>
            <View style={styles.buttonLogin}>
              <TouchableOpacity
                style={styles.inputButtonLogin}
                onPress={() => auth()}
              >
                <View style={styles.viewButtonLogin}>
                  <Text>
                    Login {'  '}
                    <FontAwesomeIcon icon={faArrowRightToFile} />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.resetSenha}>
            <View>
              <Text style={styles.messageResetSenha}>Esqueceu a senha</Text>
              {/* <Text style={styles.inputTextSenha}>{error}</Text> */}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
