import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from './src/screens/AuthScreen';
import Register from './src/screens/Register';
import SelectInterests from './src/screens/SelectInterests';
import VerificationCode from './src/screens/VerificationCode';
import HomeScreen from './src/screens/HomeScreen';
import TopicsScreen from './src/screens/TopicsScreen';
import CameraScreen from './src/screens/CameraScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FooterComponent from './src/components/FooterComponent';
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
        <Stack.Screen name='VerificationCode' component={VerificationCode} options={{
          headerShown: false,
        }}/>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
          title: "Home"
        }}/>
        <Stack.Screen name='TopicsScreen' component={TopicsScreen} options={{
          title: "Topics"
        }}/>
        <Stack.Screen name='FooterComponent' component={FooterComponent} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='CameraScreen' component={CameraScreen} options={{
          headerShown: false
        }}/>
        <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


