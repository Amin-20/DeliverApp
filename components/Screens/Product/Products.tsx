import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import {styles} from "./ProductStyles"
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const data = [
  { id: '1', name: 'Boston Lettuce', price: '1.10 € / piece', image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
  { id: '2', name: 'Purple Cauliflower', price: '1.85 € / kg', image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
  { id: '3', name: 'Savoy Cabbage', price: '1.45 € / kg', image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
];

export default function ProductScreen({route}) {
    const { category } = route.params; 
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();
  navigation.setOptions({
         headerShown: false,
       });
useEffect(() => {
    navigation.setOptions({ title: category.name });
  }, [category]);

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.productActions}>
          <TouchableOpacity style={styles.heartButton}>
            <Text>♡</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cartButton}>
            <Text>🛒</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="purple" />
        </TouchableOpacity>
        </TouchableOpacity>
        <Text style={styles.title}>{category.name}</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Categories
      <View style={styles.categoriesContainer}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeCategory]}>
          <Text style={styles.categoryText}>Cabbage and lettuce (14)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Cucumbers and tomatoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Onions and garlic (8)</Text>
        </TouchableOpacity>
      </View> */}

      {/* Product List */}
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}






// export default function ProductScreen({ route }) {
//   const navigation = useNavigation();

//   // Use useEffect to set the title dynamically
//   useEffect(() => {
//     navigation.setOptions({ title: category.name });
//   }, [category]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{category.name}</Text>
//       {/* Add category-specific content here */}
//       <FlatList
//         data={category.products}  
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.name}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
// });