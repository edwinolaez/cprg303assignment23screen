import { StyleSheet, Text, View } from 'react-native';

export default function UpdatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Updates</Text>
      <Text style={styles.subtitle}>This screen is under construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
});