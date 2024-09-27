import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F8F8',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#FFF',
      marginTop:"10%"
    },
    backButton: {
      paddingRight: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    searchContainer: {
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    searchInput: {
      backgroundColor: '#EFEFEF',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
    },
    categoriesContainer: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    categoryButton: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#E8E8E8',
      borderRadius: 20,
      marginRight: 10,
    },
    activeCategory: {
      backgroundColor: '#E4D6FA',
    },
    categoryText: {
      fontSize: 14,
    },
    productList: {
      paddingHorizontal: 20,
    },
    productContainer: {
      flexDirection: 'row',
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 15,
      overflow: 'hidden',
    },
    productImage: {
      width: 100,
      height: 100,
      borderRadius: 8,
    },
    productDetails: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between',
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 14,
      color: '#666',
    },
    productActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    heartButton: {
      padding: 5,
    },
    cartButton: {
      padding: 5,
      backgroundColor: '#34C759',
      borderRadius: 5,
    
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 15,
      backgroundColor: '#FFF',
    },
  });
  