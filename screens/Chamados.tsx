import React, { useState } from 'react'
import { Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, View, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RootTabScreenProps } from '../types'

export default function Chamados({navigation} : any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Qual o seu problema?</Text>
      <View style={styles.optView}>
        <Pressable style={styles.options} onPress={() => navigation.navigate('Chamados1',{solicit: 'Informática'})}>
          <Text style={styles.optionsText}>Informática</Text>
        </Pressable>
        <Pressable style={styles.options} onPress={() => console.log('teste')}>
          <Text style={styles.optionsText}>Audiovisual</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
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
  optView:{
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      
  }
})
