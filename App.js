import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import Register from './src/screens/Register';
import SelectInterests from './src/screens/SelectInterests';
import {useFonts} from 'expo-font';

const Stack = createNativeStackNavigator();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={AuthScreen} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='Register' component={Register} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='SelectInterests' component={SelectInterests} options={{
          headerShown: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


