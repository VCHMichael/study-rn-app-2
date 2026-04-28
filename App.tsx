import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator.tsx';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { UserProvider } from './src/context/userContext/UserContext.tsx';
import { Provider } from 'react-redux';
import { store } from './src/store/store.ts';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider>
          <UserProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppNavigator />
          </UserProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
