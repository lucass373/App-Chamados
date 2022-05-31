import { child, push, ref, set, update } from 'firebase/database'
import React, { useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootTabScreenProps } from '../types'
import {db} from '../firebase/firebase'

export default function Chamados2({ route, navigation}: RootTabScreenProps<'Chamados2'>) {
  const { defeito, solicit }: any = route.params



  const [name, setName] = useState('')
  const [sala, setSala] = useState('')
  const [viewId, setViewId] = useState('')

  const onPress=()=>{
    const newPostKey = push(child(ref(db), 'chamados')).key;
    set(ref(db, `chamados/${newPostKey}`),{solicit, defeito, name, sala, viewId, newPostKey})
    navigation.navigate('ListaChamados',{name})
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Confirme os dados</Text>
        <Text style={styles.title}>solicitação para: {solicit}</Text>
        <Text style={styles.title}>tipo do defeito: {defeito}</Text>
        <View
          style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}
        >
          <Text style={styles.title}>Nome:</Text>
          <TextInput
            style={styles.imp}
            onChangeText={(name) => setName(name)}
            value={name}
            placeholder="Digite seu nome"
          />
        </View>
        <View
          style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}
        >
          <Text style={styles.title}>Sala:</Text>
          <TextInput
            style={styles.imp}
            onChangeText={(sala) => setSala(sala)}
            value={sala}
            placeholder="Digite sua sala"
            keyboardType='number-pad'
          />
        </View>
        <View
          style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}
        >
          <Text style={styles.title}>ID:</Text>
          <TextInput
            onChangeText={(viewId) => setViewId(viewId)}
            value={viewId}
            style={styles.imp}
            placeholder="Digite o ID do Team Viewer"
            keyboardType='number-pad'
          />
        </View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>confirmar pedido</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 160,
    borderRadius: 50,
  },
  imp: {
    marginLeft: 10,
    fontSize: 25,
    marginBottom: 27,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
    marginBottom: 30,
  },
  options: {
    marginBottom: 20,
    borderColor: 'black',
    borderRadius: 30,
    borderWidth: 3,
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  optView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
