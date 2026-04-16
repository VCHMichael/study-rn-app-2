import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: Platform.select({ios: 'grey', android: 'black'}),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: Platform.select({android: 'white', ios: undefined})
  }
});
