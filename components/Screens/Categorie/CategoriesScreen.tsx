// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Icon package
// import { Link } from 'expo-router';
// import { styles } from './CategoriesScreenStyle';
// import { useNavigation } from '@react-navigation/native'; 
// import { SafeAreaFrameContext } from 'react-native-safe-area-context';

// const allCategories = [
//   { id: '1', name: 'Vegetables', count: 43, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6' },
//   { id: '2', name: 'Fruits', count: 32, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' },
//   { id: '3', name: 'Bread', count: 22, image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
//   { id: '4', name: 'Sweets', count: 56, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLQuad8hynOLvQf6BGBasa1lTWbkcsnwsOQ&s' },
//   { id: '5', name: 'Pasta', count: 10, image: 'https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg' },
//   { id: '6', name: 'Tea', count: 5, image: 'https://cdn.shopify.com/s/files/1/0533/6743/9558/t/5/assets/pf-3bc933da--indexHowtotastetea.jpg?v=1627466622' },
//   { id: '6', name: 'Coffee', count: 5, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5bqC7IA8JdjL19Ko8baj61wNE8Qlab3GWw&s' },
//   { id: '6', name: 'Alcohol Drinks', count: 5, image: 'https://www.pernod-ricard.com/sites/default/files/styles/brand_tile_3_in_row_desktop_958x1048_/public/2021-06/jameson_sa_website.jpeg.jpg?itok=zILg3lS5' },
//   { id: '6', name: 'Drinks', count: 5, image: 'https://www.thespruceeats.com/thmb/gFAjx0MCbTyeaz9jKwn7PsWmsiU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_cardinal-punch-recipe-non-alcoholic-759634-hero-5bd31ecc46e0fb00262d9f2f.jpg' },
//   { id: '6', name: 'Milk', count: 5, image: 'https://idahomilkproducts.b-cdn.net/wp-content/uploads/2021/09/processing-differences-common-dairy-products.jpg' },
// ];

// export default function CategoriesScreen() {
//   const [categories, setCategories] = useState(allCategories);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (text) => {
//     setSearchQuery(text);

//     const filteredCategories = allCategories.filter((category) =>
//       category.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setCategories(filteredCategories);
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('Products', { category: item })}>
//       <View style={styles.card}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <Text style={styles.cardTitle}>{item.name}</Text>
//         <Text style={styles.cardCount}>({item.count})</Text>
//       </View>
//     </TouchableOpacity>
//   );
  
//   const navigation = useNavigation();
//   navigation.setOptions({
//     headerShown: false,
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.navigate('Delivery')}>
//           <Ionicons name="arrow-back" size={24} color="purple" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Categories</Text>
//       </View>

//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           value={searchQuery}
//           onChangeText={handleSearch} 
//           />
//       </View>

//       <FlatList
//         data={categories}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         contentContainerStyle={styles.list}
//         />

//       <View style={styles.bottomNav}>
//         <TouchableOpacity>
//           <Ionicons name="grid-outline" size={30} color="purple" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="cart-outline" size={30} color="gray" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="person-outline" size={30} color="gray" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }














// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // Icon package
// import { useNavigation } from '@react-navigation/native'; 
import { styles } from './CategoriesScreenStyle';

// const allCategories = [
//   { id: '1', name: 'Vegetables', count: 43, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6' },
//   { id: '2', name: 'Fruits', count: 32, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' },
//   { id: '3', name: 'Bread', count: 22, image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
//   { id: '4', name: 'Sweets', count: 56, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLQuad8hynOLvQf6BGBasa1lTWbkcsnwsOQ&s' },
//   { id: '5', name: 'Pasta', count: 10, image: 'https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg' },
//   { id: '6', name: 'Tea', count: 5, image: 'https://cdn.shopify.com/s/files/1/0533/6743/9558/t/5/assets/pf-3bc933da--indexHowtotastetea.jpg?v=1627466622' },
// ];



// export default function CategoriesScreen() {
//   const [categories, setCategories] = useState(allCategories);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigation = useNavigation(); 

//   navigation.setOptions({
//     headerShown: false,
//   });

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     const filteredCategories = allCategories.filter((category) =>
//       category.name.toLowerCase().includes(text.toLowerCase())
//     );
//     setCategories(filteredCategories);
//   };

//   const renderItem = ({ item }) => (
//    <TouchableOpacity onPress={() => navigation.navigate('Products', { category: item })}>
//       <View style={styles.card}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <Text style={styles.cardTitle}>{item.name}</Text>
//         <Text style={styles.cardCount}>({item.count})</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="purple" />
//         </TouchableOpacity>
//         <Text style={styles.title}>Categories</Text>
//       </View>

//       <View style={styles.searchContainer}>
//         <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
//         <TextInput
//           placeholder="Search"
//           style={styles.searchInput}
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//       </View>

//       <FlatList
//         data={categories}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         columnWrapperStyle={styles.columnWrapper}
//         contentContainerStyle={styles.list}
//       />

//       <View style={styles.bottomNav}>
//         <TouchableOpacity>
//           <Ionicons name="grid-outline" size={30} color="purple" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="cart-outline" size={30} color="gray" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="person-outline" size={30} color="gray" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }













import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

const allCategories = [
  { id: '1', name: 'Vegetables', count: 43, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6' },
  { id: '2', name: 'Fruits', count: 32, image: 'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4' },
  { id: '3', name: 'Bread', count: 22, image: 'https://www.melskitchencafe.com/wp-content/uploads/rustic-bread-updated3.jpg' },
  { id: '4', name: 'Sweets', count: 56, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLQuad8hynOLvQf6BGBasa1lTWbkcsnwsOQ&s' },
  { id: '5', name: 'Pasta', count: 10, image: 'https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg' },
  { id: '6', name: 'Tea', count: 5, image: 'https://cdn.shopify.com/s/files/1/0533/6743/9558/t/5/assets/pf-3bc933da--indexHowtotastetea.jpg?v=1627466622' },
];

export default function CategoriesScreen() {
  const [categories, setCategories] = useState(allCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();  // Hook for navigation
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
    <TouchableOpacity style={styles.section} onPress={() => navigation.navigate('Products', { category: item })}>
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
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
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
