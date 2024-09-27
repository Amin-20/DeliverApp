import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./CategoriesScreenStyle";

const allCategories = [
  {
    id: "1",
    name: "Milk",
    count: 10,
    image:
      "https://th.bing.com/th/id/R.e907729ea8798f0aa4a8b3ff961f574d?rik=vfnzcQwIkspdYw&pid=ImgRaw&r=0",
  },
  {
    id: "2",
    name: "Flour",
    count: 25,
    image:
      "https://th.bing.com/th/id/R.23a95e38e3bfc885007e021b3048e237?rik=%2bkaeOZ4%2bETbdVQ&riu=http%3a%2f%2fwatuseefoods.com%2fwp-content%2fuploads%2f2020%2f12%2ftipos-de-harinas.jpg&ehk=QJbKWlUm6nQAR1UeqrsaoIRo3VFI4DWhgY0VjsdymvQ%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: "3",
    name: "Fruits",
    count: 8,
    image:
      "https://th.bing.com/th/id/OIP.5mSxbyZkchbPhyfzdbAq9gHaE7?rs=1&pid=ImgDetMain",
  },
  {
    id: "4",
    name: "Vegetables",
    count: 31,
    image:
      "https://static.independent.co.uk/2023/08/07/10/01141234-51ec8df3-cb87-409f-84f2-7f24fc57434c.jpg",
  },
];

export default function CategoriesScreen() {
  const [categories, setCategories] = useState(allCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredCategories = allCategories.filter((category) =>
      category.name.toLowerCase().includes(text.toLowerCase())
    );
    setCategories(filteredCategories);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.section}
      onPress={() => navigation.navigate("Products", { category: item })}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardCount}>({item.count})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="purple" />
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.list}
      />

<View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons
            onPress={() => navigation.navigate("Categories")}
            name="grid-outline"
            size={30}
            color="purple"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            onPress={() => navigation.navigate("Products")}
            name="cart-outline"
            size={30}
            color="gray"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            onPress={() => navigation.navigate("Payment")}
            name="person-outline"
            size={30}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
