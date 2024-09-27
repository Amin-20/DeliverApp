import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header1: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#FFF',
      marginLeft:"-4%"
    },
    section: {
      marginBottom: 63,
    },
    section2: {
      flexDirection : 'row',
      justifyContent: 'space-between',
      alignItems : "center",
      marginBottom:"27%"

    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'purple',
      marginBottom:30,
      marginLeft:"5%",
      marginTop:"6%"
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 10,
      flexDirection:"row",
    },
    sectionContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
    },
    changeText: {
      color: 'purple',
      fontWeight: '600',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15,
        backgroundColor: '#FFF',
      },
  });
  