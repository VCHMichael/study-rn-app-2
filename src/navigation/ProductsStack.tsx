import { createStackNavigator } from '@react-navigation/stack';
import { ProductsStackParamList } from './types.ts';
import { ROUTES } from '../constants/routes.ts';
import { ProductScreen } from '../screens/ProductScreen.tsx';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen.tsx';

const Stack = createStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ProductsScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTES.ProductsScreen} component={ProductScreen} />

      <Stack.Screen
        name={ROUTES.ProductDetailsScreen}
        component={ProductDetailsScreen}
        options={{
          headerBackTitleStyle: { color: 'red' },
        }}
      />
    </Stack.Navigator>
  );
};
