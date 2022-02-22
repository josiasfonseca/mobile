import * as React from 'react';
import { View, Text } from 'react-native'
import stylesmain from '../Layout/stylesmain'
import UsuarioList from '../Usuarios/UsuarioList'
import styles from './styles'

export default function Home() {
  return (
    <View style={stylesmain.container}>
      <View style={styles.container}>
        <UsuarioList />
      </View>
    </View>
  )
}
