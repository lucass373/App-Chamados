import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootTabScreenProps } from '../types'

export default function Chamados1({ navigation, route }: any) {
  const [defeito, setDefeito] = useState('')
  const [visible, setVisible] = useState(false)
  const { solicit } = route.params
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Qual o tipo de defeito?</Text>
      <ScrollView contentContainerStyle={{justifyContent: 'center',flexGrow: 1}} style={styles.optView}>
        <Pressable
          onPress={() => {
            navigation.navigate('Chamados2', {
              defeito: 'Computador não liga',
              solicit,
            })
          }}
          style={styles.options}
        >
          <Text style={styles.optionsText}>Computador não liga</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Chamados2', {
              defeito: 'Sem internet',
              solicit,
            })
          }}
          style={styles.options}
        >
          <Text style={styles.optionsText}>Sem internet</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Chamados2', {
              defeito: 'Senha incorreta',
              solicit,
            })
          }}
          style={styles.options}
        >
          <Text style={styles.optionsText}>Senha incorreta</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('Chamados2', {
              defeito: 'Teclado/mouse com defeito',
              solicit,
            })
          }}
          style={styles.options}
        >
          <Text style={styles.optionsText}>Teclado/mouse com defeito</Text>
        </Pressable>
        <Pressable onPress={() => setVisible(!visible)} style={styles.options}>
          <Text style={styles.optionsText}>Outros</Text>
        </Pressable>
      </ScrollView>
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
            onChangeText={(defeito) => setDefeito(defeito)}
            multiline={true}
            autoFocus={visible}
            onBlur={() => setVisible(!visible)}
            style={{ fontSize: 20, marginRight: 10 }}
            placeholder="Digite seu problema"
          />
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Chamados2', { solicit, defeito })
              }
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
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  options: {
    marginBottom: 20,
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 3,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  optView: {
    width: '90%',
  },
})
