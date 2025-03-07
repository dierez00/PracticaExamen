import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir a Ahorros" onPress={() => navigation.navigate('Savings')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Ir a Configuración" onPress={() => navigation.navigate('Settings')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  buttonContainer: { marginVertical: 5 }, // Agrega separación de 10px aprox entre botones
});
