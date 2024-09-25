import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function DeliveryScreen() {
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
          <Link href={"/Categories"}>
        <TouchableOpacity style={styles.orderButton}>
          
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
          </Link>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '40%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#c4ff65',
  },
  contentBox: {
    width: '90%',
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 100,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: '#2de981',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 10,
  },
  orderButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  dismissButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  dismissButtonText: {
    fontSize: 14,
    color: '#A3A3A3',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#fff',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
});
