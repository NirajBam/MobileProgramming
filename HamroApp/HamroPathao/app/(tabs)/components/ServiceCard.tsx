import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../lib/theme";

export default function ServiceCard({ title, image, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.circle}>
        <Image source={image} style={styles.icon} />
      </View>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginHorizontal: 12,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#FFE5E8",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  label: {
    marginTop: 8,
    fontSize: 14,
    color: theme.colors.textDark,
    fontWeight: "500",
  },
});
