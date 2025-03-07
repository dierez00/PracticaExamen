import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SavingsScreen({ navigation }) {
  const [savings, setSavings] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ahorros: ${savings}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Sumar 10" onPress={() => setSavings(savings + 10)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={() => setSavings(0)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  buttonContainer: { marginVertical: 5 }, 
});
