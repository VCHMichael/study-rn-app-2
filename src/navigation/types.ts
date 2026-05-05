import type { NavigatorScreenParams } from '@react-navigation/native';
import { MemoListScreen } from '../screens/MemoListItem.tsx';

export type ProductsStackParamList = {
  ProductsScreen: undefined; // screen
  ProductDetailsScreen: {
    productId: number;
    productName?: string;
  };
};

export type ProfileStackParamList = {
  ProfileScreen: undefined; // screen
  EditProfileScreen: undefined; // screen
};

export type MainTabParamList = {
  HomeScreen: undefined; // screen
  ProductsStack: NavigatorScreenParams<ProductsStackParamList>; // stack
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>; // stack
};

export type RootDrawerParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>; // tabs
  ContactsScreen: undefined; // screen
  ReduxCounterScreen: undefined;
  CameraScreen: undefined;
  LocationScreen: undefined;
  SensorScreen: undefined;
  LayoutAnimatedListScreen: undefined
  ReanimatedScreen: undefined
  MemoListScreen: undefined
};
