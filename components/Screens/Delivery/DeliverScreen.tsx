import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./DeliverScreenStyle";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#a32cc4", "#6023c0"]}
        style={styles.background}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/image (1).png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentBox}>
        <View style={styles.iconContainer}>
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.title}>Non-Contact Deliveries</Text>
        <Text style={styles.description}>
          When placing an order, select the option "Contactless delivery" and
          the courier will leave your order at the door.
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Categories")}
          style={styles.orderButton}
        >
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>

    
    </View>
  );
}
