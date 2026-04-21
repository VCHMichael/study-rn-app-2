import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabs } from './MainTabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { RootDrawerParamList } from './types';
import { ROUTES } from '../constants/routes.ts';

const Drawer = createDrawerNavigator<RootDrawerParamList>();


// Navigation entry point

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen
          name={ROUTES.MainTabs}
          component={MainTabs}
          options={{
            title: 'Головна',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name={ROUTES.ContactsScreen}
          component={ContactsScreen}
          options={{
            title: 'Контакти',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
