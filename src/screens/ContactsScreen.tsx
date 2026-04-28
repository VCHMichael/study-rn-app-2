import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/themeContext/useTheme';
import { CustomButton } from '../components';

export const ContactsScreen = () => {
  const { theme, toggleTheme } = useTheme();

  const containerStyle =
    theme === 'light' ? styles.lightContainer : styles.darkContainer;

  const textStyle = theme === 'light' ? styles.textLight : styles.textDark;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={textStyle}>Current: {theme}</Text>
      <CustomButton title={'Змінити тему'} onPress={toggleTheme} />
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
