import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <View style={styles.navbar}>
        
        <Text style={styles.brand}>HamroPatho</Text>

      
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={32} color="#000" />
        </TouchableOpacity>
      </View>

      
      <View style={styles.hero}>
        <Text style={styles.heading}>
          Earn with Your{"\n"}Bike, Car or{"\n"}Cycle
        </Text>

        <Text style={styles.subText}>
          Become a captain, rider or foodman on{"\n"}
          the highest earning platform!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  navbar: {
    width: "100%",
    paddingTop: 55,
    paddingBottom: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    fontSize: 26,
    fontWeight: "700",
    color: "#D32F2F", 
  },

  hero: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 46,
  },

  subText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: "center",
    color: "#555",
  },
});
