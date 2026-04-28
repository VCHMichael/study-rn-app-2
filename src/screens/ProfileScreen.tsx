import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { ProfileStackParamList } from '../navigation/types';
import { ROUTES } from '../constants/routes';
import { useUser } from '../context/userContext/useUser.ts';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store.ts';

type ProfileScreenNavigationProp = StackNavigationProp<
  ProfileStackParamList,
  'ProfileScreen'
>;

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { user } = useUser();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {user.name}</Text>
      <Text style={styles.title}>Email: {user.email}</Text>

      <Text style={styles.title}>ReduxCounter: {count}</Text>

      <Button
        title="Редагувати профіль"
        onPress={() => navigation.navigate(ROUTES.EditProfileScreen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
