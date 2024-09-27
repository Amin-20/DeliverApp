import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { styles } from "./SingleProductStyle";
import { useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App({ route }) {
    const { product } = route.params;
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 30,
            margin: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="purple" />
        </TouchableOpacity>
        <View style={{ width: "100%", height: "50%" }}>
          <Image
            source={{uri:product.image}}
            style={styles.image}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>

          <Text style={styles.country}>{product.country}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.heartButton}>
              <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartText}>ADD TO CART</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
