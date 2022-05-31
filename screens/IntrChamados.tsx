import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function IntrChamados({ navigation }) {
  const [name, setName] = useState('')
  const [visible, setVisible] = useState(false)

  const onPress = () => {
    navigation.navigate('ListaChamados', { name })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Seja Bem-Vindo(a) ao App de Chamados, pressione a opção desejada:
      </Text>
      <View style={styles.butView}>
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          style={styles.button}
        >
          <Text style={styles.buText}>Visualizar Chamados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chamados')}
          style={styles.button}
        >
          <Text style={styles.buText}>Abrir Chamado</Text>
        </TouchableOpacity>
      </View>
        {visible == true ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '80%',
              justifyContent: 'space-between',
              
            }}
          >
            <TextInput
              onChangeText={(name) => setName(name)}
              multiline={true}
              autoFocus={visible}
              onBlur={() => setVisible(!visible)}
              style={{ fontSize: 20, marginRight: 10 }}
              placeholder="Digite seu problema"
            />
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ListaChamados', { name })}
              >
                <Ionicons size={30} name={'send'} />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  buText: {
    fontWeight: 'bold',
  },
  butView: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 150,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'gray',
    width: 150,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
})
