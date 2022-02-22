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
} from 'react-native'
import { TextInput } from 'react-native'
import styles from './styles'
import { faArrowRightToFile } from '@fortawesome/free-solid-svg-icons'

export default function Login({ navigation }) {
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  // const [authUser, setAuthUser] = useState(null)

  async function auth() {
    if (user == null || password == null) {
      Alert.alert('Informe o usuário e a senha!')
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
    // let response = await fetch(
    //   'http://localhost:8000/api/auth/login?NOME=' +
    //     user +
    //     '&password=' +
    //     password,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setToken(res.access_token)
    //     Alert.alert('Logado')
    //   })
    //   .catch((err) => Alert.alert(JSON.stringify(err)))
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
