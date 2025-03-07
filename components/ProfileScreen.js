import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import profileImage from '../sources/profile.jpg'; 

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.image} />
      <View style={styles.separator} />
      <Text style={styles.title}>Goku</Text>
      <View style={styles.buttonContainer}>
        <Button title="Regresar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  separator: { width: '80%', height: 1, backgroundColor: '#ccc', marginVertical: 10 },
  title: { fontSize: 20, marginBottom: 20 },
  buttonContainer: { marginVertical: 5 },
});
