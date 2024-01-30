import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import UnderDebrisForm from './screens/forms/UnderDebrisForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='UnderDebrisForm' component={UnderDebrisForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
