import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icon package
import { Link } from 'expo-router';

const allCategories = [
  { id: '1', name: 'Vegetables', count: 43, image: 'https://link-to-vegetables-image.jpg' },
  { id: '2', name: 'Fruits', count: 32, image: 'https://link-to-fruits-image.jpg' },
  { id: '3', name: 'Bread', count: 22, image: 'https://link-to-bread-image.jpg' },
  { id: '4', name: 'Sweets', count: 56, image: 'https://link-to-sweets-image.jpg' },
  { id: '5', name: 'Pasta', count: 10, image: 'https://link-to-pasta-image.jpg' },
  { id: '6', name: 'Tea', count: 5, image: 'https://link-to-tea-image.jpg' },
];

export default function CategoriesScreen() {
  const [categories, setCategories] = useState(allCategories);
  const [searchQuery, setSearchQuery] = useState('');

  // Search Functionality
  const handleSearch = (text) => {
    setSearchQuery(text);

    // Filter categories based on search text
    const filteredCategories = allCategories.filter((category) =>
      category.name.toLowerCase().includes(text.toLowerCase())
    );
    setCategories(filteredCategories);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardCount}>({item.count})</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
        <Link href={"/"}>
          <Ionicons name="arrow-back" size={24} color="purple" />
        </Link>
        </TouchableOpacity>
        <Text style={styles.title}>Categories</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch} // Update search text dynamically
        />
      </View>

      {/* Category Cards */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.list}
      />

      {/* Bottom Navigation */}
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
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 20,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flex: 0.48,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    padding: 10,
  },
  cardCount: {
    fontSize: 14,
    color: 'gray',
    paddingHorizontal: 10,
    paddingBottom: 10,
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
