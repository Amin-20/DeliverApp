import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { styles } from './ProductStyles';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const data = [
  { id: '1', name: 'Apple', price: '0.70 € / piece', image: 'https://th.bing.com/th/id/R.fbeda6fbe91f4ebec68679869c39f142?rik=VACW%2bdmA%2bJ49zQ&pid=ImgRaw&r=0' },
  { id: '2', name: 'Banana', price: '1.20 € / kg', image: 'https://www.thedailymeal.com/img/gallery/13-delicious-things-you-can-make-with-bananas/l-intro-1673458653.jpg' },
  { id: '3', name: 'Cheese', price: '2.90 € / piece', image: 'https://th.bing.com/th/id/OIP.1IoxD8nHXV2ID6z2zI2KiQHaE7?rs=1&pid=ImgDetMain' },
  { id: '4', name: 'Milk', price: '1.85 € / kg', image: 'https://th.bing.com/th/id/OIP.9LZU9dm7WCz7Du4EoSvyiwHaHa?rs=1&pid=ImgDetMain' },
  { id: '5', name: 'White Cabbage', price: '1.45 € / kg', image: 'https://gwpriceltd.co.uk/wp-content/uploads/2020/04/GWPrice-White-Cabbage-min.jpg' },
  { id: '6', name: 'Chili', price: '1.85 € / kg', image: 'https://th.bing.com/th/id/OIP.w5QckZK4ZMrRL82AcuE70QHaFj?rs=1&pid=ImgDetMain' },
  { id: '7', name: 'Bread', price: '1.45 € / kg', image: 'https://th.bing.com/th/id/R.a0e639292d89b1a3be2541c8a6103b07?rik=wXfm9c2Et5Kmfg&riu=http%3a%2f%2fwww.cuisineandhealth.com%2fwp-content%2fuploads%2f2015%2f07%2fbread.jpg&ehk=Bz06VR32pXCftwF1VkIF3AeNbtf3sxUJW8Jwd2hnLmM%3d&risl=&pid=ImgRaw&r=0' },
  { id: '8', name: 'Lavash', price: '1.45 € / kg', image: 'https://th.bing.com/th/id/OIP.5NMnmoKZW_gvHU-nqEPSMQHaFj?rs=1&pid=ImgDetMain' },

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
