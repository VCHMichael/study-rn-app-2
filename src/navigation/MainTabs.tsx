import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProductsStack } from './ProductsStack';
import { MainTabParamList } from './types';
import { ROUTES } from '../constants/routes.ts';

import Icon from '@react-native-vector-icons/ionicons';
import { Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable
            onPress={() =>
              navigation.getParent()?.dispatch(DrawerActions.openDrawer())
            }
            style={{ paddingHorizontal: 12 }}
            hitSlop={10}
          >
            <Icon name="menu" size={24} color="#111827" />
          </Pressable>
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ellipse';

          if (route.name === ROUTES.HomeScreen) {
            iconName = 'home';
          }

          if (route.name === ROUTES.ProductsStack) {
            iconName = 'bag';
          }

          if (route.name === ROUTES.ProfileScreen) {
            iconName = 'person';
          }

          return <Icon name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
      })}
    >
      <Tab.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Головна' }}
      />
      <Tab.Screen
        name={ROUTES.ProductsStack}
        component={ProductsStack}
        options={{
          title: 'Products',
        }}
      />
      <Tab.Screen
        name={ROUTES.ProfileScreen}
        component={ProfileScreen}
        options={{ title: 'Профайл' }}
      />
    </Tab.Navigator>
  );
};
