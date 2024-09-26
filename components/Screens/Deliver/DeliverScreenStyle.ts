import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "40%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#c4ff65",
  },
  contentBox: {
    width: "90%",
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 100,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  orderButton: {
    backgroundColor: "#2de981",
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginBottom: 10,
  },
  orderButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  dismissButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  dismissButtonText: {
    fontSize: 14,
    color: "#A3A3A3",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#fff",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
  },
});
