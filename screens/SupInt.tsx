import React from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CheckBox } from 'react-native-elements'

export default function SupInt() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{alignItems: 'center',}}>
      <View>
        <Text style={styles.text}>Cadastro de Máquinas</Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>nome da máquina</Text>
      <View>
        <TextInput
          style={{ fontSize: 20, marginBottom: 10 }}
          placeholder="Digite o Nome da máquina"
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>local</Text>
      <View>
        <TextInput
          style={{ fontSize: 20, marginBottom: 10}}
          placeholder="Digite o Nome da máquina"
        />
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Patrimônio</Text>
      <View>
        <TextInput
          style={{ fontSize: 20 , marginBottom: 10}}
          placeholder="Digite o Nome da máquina"
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>id Team Viewer</Text>
      <View style={{marginBottom: 30}}>
        <TextInput
          style={{ fontSize: 20 , marginBottom: 10}}
          placeholder="Digite o Nome da máquina"
        />
      </View>
      <Text style={styles.text}>Configuração da máquina</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Processador</Text>
      <View>
        <TextInput
          style={{ fontSize: 20 , marginBottom: 10}}
          placeholder="Digite o modelo do processador"
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Memória</Text>
      <View>
        <TextInput
          style={{fontSize: 20 , marginBottom: 10}}
          placeholder="Digite a quantidade de memória instalada"
        />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>armazenamento</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <CheckBox />
        <Text>HD</Text>
        <CheckBox />
        <Text>SSD</Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 30,
    marginBottom: 30
  },
})
