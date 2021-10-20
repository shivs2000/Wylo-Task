/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import Posts from './components/Posts';
import TextPost from './components/TextPost';
import ImagePost from './components/ImagePost';
import Choice from './components/Choice';


const Stack = createNativeStackNavigator();


const App = () => {
  

  return (
 
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Posts" 
      component={Posts}
      options={{ title: ' ' ,headerShown: false}}
      />
    
      <Stack.Screen name="Text" component={TextPost} 
      />
    
      <Stack.Screen name="Image" component={ImagePost}
       />
      <Stack.Screen name="Choice" component={Choice}
      options={{ title: ' ' ,}}
       />
    </Stack.Navigator>

  </NavigationContainer>
     
     
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'blue' ,

   
  },
  button:{
    backgroundColor: '#d0d3d9',
    padding:10,
    width:80,
    justifyContent:'center',
    alignItems:'center'

  }
});

export default App;
