import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const showMessage = () => Alert.alert('Cambio realizado con éxito');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones</Text>
      <View style={styles.buttonContainer}>
        <Button title="Cambiar Tema" onPress={showMessage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Cambiar Idioma" onPress={showMessage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 },
  buttonContainer: { marginVertical: 5 }, // Espacio entre botones
});
