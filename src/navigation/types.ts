import type { NavigatorScreenParams } from '@react-navigation/native';

export type ProductsStackParamList = {
  ProductsScreen: undefined; // screen
  ProductDetailsScreen: {
    productId: number;
    productName?: string;
  };
};

export type MainTabParamList = {
  HomeScreen: undefined; // screen
  ProductsStack: NavigatorScreenParams<ProductsStackParamList>; // stack
  ProfileScreen: undefined; // screen
};

export type RootDrawerParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>; // tabs
  ContactsScreen: undefined; // screen
};
