import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    marginTop:"10%"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
    marginLeft: 20,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 20,
    alignItems: "center",
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
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    flex: 0.48,
  },
  image: {
    width: "100%",
    height: 120,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "purple",
    padding: 10,
  },
  cardCount: {
    fontSize: 14,
    color: "gray",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
  section:{
    width:"48%"
  }
});
