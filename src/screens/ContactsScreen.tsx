import React from 'react';
import { View, Text, StyleSheet, NativeModules } from 'react-native';
import { useTheme } from '../context/themeContext/useTheme';
import { CustomButton } from '../components';

const {ToastModule} = NativeModules

export const ContactsScreen = () => {
  const { theme, toggleTheme } = useTheme();

  const containerStyle =
    theme === 'light' ? styles.lightContainer : styles.darkContainer;

  const textStyle = theme === 'light' ? styles.textLight : styles.textDark;

  const onToastPress = () => ToastModule.show('Hello i amd native toast from android')

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>Current: {theme}</Text>
      <CustomButton title={'Змінити тему'} onPress={toggleTheme} />

      <CustomButton title={'Native Toast'} onPress={onToastPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 12
  },
  darkContainer: {
    backgroundColor: 'black',

    //backgroundColor: theme.container.backgroundColor
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  textDark: {
    color: 'white',
  },
  textLight: {
    color: 'black',
  },
});
