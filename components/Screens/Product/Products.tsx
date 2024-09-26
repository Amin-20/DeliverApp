import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './ProductStyles';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Boston Lettuce', price: '1.10 € / piece', image: 'https://heirloom-vegetable-seeds.com/cdn/shop/products/bibb2.jpg?v=1570843396' },
  { id: '2', name: 'Beer', price: '1.85 € / kg', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzt800zmcjnGIT5P3hUYFDjFWCSZ3qN_jL7g&s' },
  { id: '3', name: 'Boston Lettuce', price: '1.10 € / piece', image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
  { id: '4', name: 'Jack Daniels', price: '1.85 € / kg', image: 'https://www.oaks.delivery/wp-content/uploads/Jack-Daniels-Honey-Whiskey-1-1600x900-1-1200x628-cropped.webp' },
  { id: '5', name: 'Jameson', price: '1.45 € / kg', image: 'https://thewhiskeyreserve.com/cdn/shop/products/Untitleddesign_8.png?v=1676840435' },
  { id: '6', name: 'Coffee', price: '1.85 € / kg', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5bqC7IA8JdjL19Ko8baj61wNE8Qlab3GWw&s' },
  { id: '7', name: 'Milk', price: '1.45 € / kg', image: 'https://www.parents.com/thmb/qKThoOlGAzJwGZ-moTTGQVFRvhg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Grass-Fed-vs-Organic-Milk-9fff118133c14e578c2379ed86888817.jpg' },
];

export default function ProductScreen({ route }) {
  const { category } = route.params;
  const [products, setProducts] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [likedItems, setLikedItems] = useState([]); 
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: false,
  });

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredProducts = data.filter((product) =>
      product.name.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    navigation.setOptions({ title: category.name });
  }, [category]);

  const toggleHeart = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter(id => id !== itemId)); 
    } else {
      setLikedItems([...likedItems, itemId]); 
    }
  };

  const renderProduct = ({ item }) => {
    const isLiked = likedItems.includes(item.id); 

    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
          <View style={styles.productActions}>
            <TouchableOpacity
              style={styles.heartButton}
              onPress={() => toggleHeart(item.id)}
            >
              <Ionicons name="heart" size={24} color={isLiked ? 'red' : 'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cartButton}
              onPress={() => navigation.navigate('Payment', { product: item })}
            >
              <Ionicons name="cart" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="purple" />
        </TouchableOpacity>
        <Text style={styles.title}>   {category.name}</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />

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
    </SafeAreaView>
  );
}
