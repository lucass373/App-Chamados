import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { equalTo, onValue, orderByChild, query, ref, remove } from 'firebase/database'
import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { db } from '../firebase/firebase'

export default function Chamados2({route}:any) {

    const {name} = route.params

  const [items, setItems] = React.useState([])
  //read
  useEffect(() => {
    onValue(query(ref(db, 'chamados/'),orderByChild('name'),equalTo(name)), (snapshot) => {
      setItems([])
      const data = snapshot.val()
      if (data !== null) {
        Object.values(data).map((items) => {
          setItems((oldArray) => [...oldArray, items])
        })
      }
    })
  }, [])
  const remover = (id : string) =>{
    remove(ref(db, 'chamados/' + id),);
  }

  function ItemComponent({ items }) {
    return (
      <View style={styles.container}>
        {items.map((items: any, index: string) => {
            
          return (
            <View key={index} style={styles.itemView}>
              <Text style={styles.itemText}>{items.name}</Text>
              <Text style={styles.itemText}>{items.defeito}</Text>
              <Text style={styles.itemText}>{items.sala}</Text>
              <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons name='run-fast' size={25} color={ 'gray'} style={{marginRight: 15}}/>
              <TouchableOpacity onPress={()=>remover(items.newPostKey)}>
              <Entypo
              name="trash"
              color={'red'}
              backgroundColor={''}
              underlayColor={''}
              size={20}
              />
              </TouchableOpacity>
              </View>

            </View>
          )
        })}
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Aguardo</Text>
      <ScrollView style={{width: '100%',height: '90%'}}>
      {items.length > 0 ? (
        <ItemComponent items={items} />
      ) : (
        <Text style={styles.title}>No items</Text>
      )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  itemView: {
    borderWidth: 2,
    marginBottom: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  itemText: {
    fontSize: 20,
    marginLeft: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 160,
    borderRadius: 50,
  },
  imp: {
    marginLeft: 10,
    fontSize: 30,
    marginBottom: 27,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  optView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
