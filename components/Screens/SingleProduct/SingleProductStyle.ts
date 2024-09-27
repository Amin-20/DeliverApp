import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: "100%",
    },
    infoContainer: {
      padding: 16,
      backgroundColor: '#f9f9f9',
      borderRadius:20,
      position:"absolute",
      marginTop:"80%",
      paddingTop:"13%",
      paddingBottom:"40%"
    },
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      color: '#3A3A3A',
      marginBottom:"10%",
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#3A3A3A',
      marginTop: 8,
    },
    weight: {
      fontSize: 14,
      color: '#67C23A',
      marginTop: 4,
    },
    country: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#3A3A3A',
      marginVertical: 12,
    },
    description: {
      fontSize: 17,
      color: '#6C6C6C',
      marginVertical: 4,
      lineHeight: 20,
    },
    actionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: "18%",
    },
    heartButton: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 25,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    addToCartButton: {
      flex: 1,
      backgroundColor: '#67C23A',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginLeft: 16,
    },
    addToCartText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });