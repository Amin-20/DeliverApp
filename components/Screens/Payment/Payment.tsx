import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from "./PaymentStyles"
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CheckoutScreen() {
    const navigation = useNavigation();  
    
  navigation.setOptions({
    headerShown: false,
  });
  const [nonContactDelivery, setNonContactDelivery] = useState(true);
  const [selectedOption, setSelectedOption] = useState('By Drone');

  const deliveryOptions = [
    { name: "I'll pick it up myself", icon: 'walk' },
    { name: 'By courier', icon: 'bike' },
    { name: 'By Drone', icon: 'drone' },
  ];

  const handleDeliveryOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <ScrollView style={styles.container}>
     <View style={styles.header1}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="purple" />
        </TouchableOpacity>
        <Text style={styles.header}>Payment</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment method</Text>
        <View style={styles.sectionContent}>
          <FontAwesome5 name="credit-card" size={24} color="#6C63FF" />
          <Text style={styles.text}>**** **** **** 4747</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery address</Text>
        <View style={styles.sectionContent}>
          <Text style={styles.text}>
            Alexandra Smith {'\n'}
            Cesu 31 k-2 5.st, SIA Chili {'\n'}
            Riga {'\n'}
            LV-1012 {'\n'}
            Latvia
          </Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>CHANGE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery options</Text>
        {deliveryOptions.map((option) => (
          <TouchableOpacity
            key={option.name}
            style={styles.option}
            onPress={() => handleDeliveryOptionChange(option.name)}
          >
            <MaterialCommunityIcons
              name={option.icon}
              size={24}
              color={selectedOption === option.name ? '#6C63FF' : '#000'}
            />
            <Text style={styles.text}>{option.name}</Text>
            {selectedOption === option.name && (
              <Ionicons name="checkmark-circle" size={24} color="#6C63FF" />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Non-contact-delivery</Text>
        <Switch
          value={nonContactDelivery}
          onValueChange={() => setNonContactDelivery(!nonContactDelivery)}
          thumbColor={nonContactDelivery ? '#6C63FF' : '#ccc'}
        />
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
    </ScrollView>
  );
}