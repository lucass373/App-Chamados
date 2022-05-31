import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, TextInput } from 'react-native'
import { RootTabScreenProps } from '../types'
//import { child, get, getDatabase, onValue, ref, set } from "firebase/database";
export default function LoginScreen({
  navigation,
}: RootTabScreenProps<'LoginScreen'>) {
  const [user, setUser] = useState('suporte')
  const [pass, setPass] = useState('')

  const onPress = () => {
    if (user == 'professor' && pass == '') {
      navigation.navigate('IntrChamados')
      setUser('')
      setPass('')
    }else if(user == 'suporte' && pass == '') {
      navigation.navigate('SupList')
      setUser('')
      setPass('')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>usuário</Text>

      <TextInput
        placeholder="usuário"
        style={styles.input}
        onChangeText={(name) => setUser(name)}
        value={user}
      ></TextInput>
      <Text style={styles.title}>senha</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="senha"
        style={styles.input}
        onChangeText={(passw) => setPass(passw)}
        value={pass}
      ></TextInput>

      <View style={styles.separator} />

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>

      <View style={styles.separator} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    textAlign: 'center',
    backgroundColor: 'white',
    width: 160,
    borderRadius: 50,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 160,
    borderRadius: 50,
  },
})
