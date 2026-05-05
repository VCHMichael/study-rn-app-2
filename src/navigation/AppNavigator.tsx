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
import { LayoutAnimatedListScreen } from '../screens/LayoutAnimatedListScreen.tsx';
import { ReanimatedScreen } from '../screens/ReanimatedScreen.tsx';
import { MemoListScreen } from '../screens/MemoListItem.tsx';

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

        <Drawer.Screen
          name={ROUTES.LayoutAnimatedListScreen}
          component={LayoutAnimatedListScreen}
          options={{
            title: 'LayoutAnimatedListScreen',
          }}
        />

        <Drawer.Screen
          name={ROUTES.ReanimatedScreen}
          component={ReanimatedScreen}
          options={{
            title: 'ReanimatedScreen',
          }}
        />
        <Drawer.Screen
          name={ROUTES.MemoListScreen}
          component={MemoListScreen}
          options={{
            title: 'MemoListScreen',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
