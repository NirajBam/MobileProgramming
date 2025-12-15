import { View, Text, StyleSheet, ScrollView } from "react-native";
import ServiceCard from "../components/ServiceCard";
import { theme } from "../lib/theme";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.logo}>HamroPorter</Text>
        <Ionicons name="person-circle-outline" size={40} color="black" />
      </View>

      {/* Services */}
      <View style={styles.section}>
        <View style={styles.row}>
          <ServiceCard
            title="Parcel"
            image={require("../assets/parcel.png")}
            onPress={() => navigation.navigate("Parcel")}
          />

          <ServiceCard
            title="Room Shift"
            image={require("../assets/room.png")}
            onPress={() => navigation.navigate("RoomShift")}
          />

          <ServiceCard
            title="Truck/Bolero"
            image={require("../assets/truck.png")}
            onPress={() => navigation.navigate("Truck")}
          />
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.quickBox}>
        <Text style={styles.quickText}>View Recent Bookings</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  topBar: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: 26,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  heading: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 30,
  },
  quickBox: {
    backgroundColor: theme.colors.surface,
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  quickText: {
    fontSize: 16,
    color: theme.colors.textDark,
  },
});
