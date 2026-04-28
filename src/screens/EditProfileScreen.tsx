import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useUser } from '../context/userContext/useUser.ts';
import { useNavigation } from '@react-navigation/core';

export const EditProfileScreen = () => {
  const { user, updateUser } = useUser();

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const navigation = useNavigation()

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Validation error', 'Name is required');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Validation error', 'Email is invalid');
      return;
    }

    updateUser({
      name,
      email,
    });

    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Редагувати профіль</Text>

      <TextInput
        style={styles.input}
        placeholder="Ім'я"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Button title="Зберегти" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
});
