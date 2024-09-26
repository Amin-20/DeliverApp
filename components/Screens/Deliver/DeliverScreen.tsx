import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './DeliverScreenStyle';
import { useNavigation } from '@react-navigation/native'; 

export default function DeliveryScreen() {
  
  const navigation = useNavigation();

  return (

    
    <View style={styles.container}>
      {/* Gradient background */}
      <LinearGradient
        colors={['#a32cc4', '#6023c0']}
        style={styles.background}
      />

      {/* Top Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://link-to-your-logo-image.png' }}
          style={styles.logo}
        />
      </View>

      {/* Content Box */}
      <View style={styles.contentBox}>
        <View style={styles.iconContainer}>
          {/* Add your icon here */}
          <Image source={{ uri: 'https://link-to-your-icon.png' }} style={styles.icon} />
        </View>
        <Text style={styles.title}>Non-Contact Deliveries</Text>
        <Text style={styles.description}>
          When placing an order, select the option "Contactless delivery" and the courier will leave your order at the door.
        </Text>

        {/* Buttons */}
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.orderButton}>
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dismissButton}>
          <Text style={styles.dismissButtonText}>DISMISS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="grid-outline" size={30} color="purple" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={30} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={30} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
