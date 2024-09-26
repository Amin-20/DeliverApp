import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DeliveryScreen from '@/components/Screens/Deliver/DeliverScreen'
import CategoriesScreen from '@/components/Screens/Categorie/CategoriesScreen'; // Mövcud kateqoriya səhifəsi

const Stack = createStackNavigator();

export default function _layout() {
  return (
    <NavigationContainer
        independent={true}>
      <Stack.Navigator initialRouteName="Delivery">
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

