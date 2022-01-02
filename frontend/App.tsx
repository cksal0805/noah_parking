import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Floor from './pages/Floor';
import {ParkingPositionContextProvider} from './contexts/ParkingPositionContext';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <ParkingPositionContextProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: '주차한 층수 등록하기',
            }}
            name="Floor"
            component={Floor}
          />
        </Stack.Navigator>
      </ParkingPositionContextProvider>
    </NavigationContainer>
  );
};

export default App;
