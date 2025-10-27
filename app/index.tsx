import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// const Index = () => {
//   return (
//     <View>
//       <Text>Index</Text>
//     </View>
//   )
// }

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chats</Text>
      <Text style={styles.subtitle}>This is the main chat screen.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8
  },
})
