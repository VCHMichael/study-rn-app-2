import { createStackNavigator } from '@react-navigation/stack';
import { ProfileStackParamList } from './types';
import { ROUTES } from '../constants/routes';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EditProfileScreen } from '../screens/EditProfileScreen';

const Stack = createStackNavigator<ProfileStackParamList>();

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ProfileScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTES.ProfileScreen} component={ProfileScreen} />
      <Stack.Screen
        name={ROUTES.EditProfileScreen}
        component={EditProfileScreen}
      />
    </Stack.Navigator>
  );
};
