import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabs } from './MainTabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { RootDrawerParamList } from './types';
import { ROUTES } from '../constants/routes.ts';
import { ReduxCounterScreen } from '../screens/ReduxCounterScreen.tsx';
import { CameraScreen } from '../screens/CameraScreen.tsx';
import { LocationScreen } from '../screens/LocationScreen.tsx';
import { SensorScreen } from '../screens/SensorScreen.tsx';

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
        <Drawer.Screen
          name={ROUTES.ReduxCounterScreen}
          component={ReduxCounterScreen}
          options={{
            title: 'Counter',
          }}
        />
        <Drawer.Screen
          name={ROUTES.CameraScreen}
          component={CameraScreen}
          options={{
            title: 'Camera',
          }}
        />
        <Drawer.Screen
          name={ROUTES.LocationScreen}
          component={LocationScreen}
          options={{
            title: 'Location',
          }}
        />
        <Drawer.Screen
          name={ROUTES.SensorScreen}
          component={SensorScreen}
          options={{
            title: 'SensorScreen',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
