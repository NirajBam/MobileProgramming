import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  elevation,
  typography,
} from "../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Vehicle {
  id: string;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  description: string;
}

interface VehicleCarouselProps {
  onSelectVehicle: (vehicle: Vehicle) => void;
}

const VEHICLES: Vehicle[] = [
  {
    id: "1",
    name: "Mini Pickup",
    icon: "truck-cargo-container",
    description: "Small items",
  },
  { id: "2", name: "Pickup Truck", icon: "truck", description: "Medium load" },
  { id: "3", name: "Van", icon: "van-utility", description: "Large load" },
  {
    id: "4",
    name: "Mini Truck",
    icon: "dump-truck",
    description: "Heavy items",
  },
  {
    id: "5",
    name: "Flatbed",
    icon: "truck-flatbed",
    description: "Special loads",
  },
];

export default function VehicleCarousel({
  onSelectVehicle,
}: VehicleCarouselProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (vehicle: Vehicle) => {
    setSelectedId(vehicle.id);
    onSelectVehicle(vehicle);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Vehicle Type</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {VEHICLES.map((vehicle) => (
          <TouchableOpacity
            key={vehicle.id}
            onPress={() => handleSelect(vehicle)}
            activeOpacity={0.7}
            style={[
              styles.vehicleCard,
              selectedId === vehicle.id && styles.vehicleCardSelected,
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                selectedId === vehicle.id && styles.iconContainerSelected,
              ]}
            >
              <MaterialCommunityIcons
                name={vehicle.icon}
                size={32}
                color={
                  selectedId === vehicle.id ? colors.secondary : colors.primary
                }
              />
            </View>
            <Text
              style={[
                styles.vehicleName,
                selectedId === vehicle.id && styles.vehicleNameSelected,
              ]}
            >
              {vehicle.name}
            </Text>
            <Text
              style={[
                styles.vehicleDescription,
                selectedId === vehicle.id && styles.vehicleDescriptionSelected,
              ]}
            >
              {vehicle.description}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.lg,
  },
  label: {
    fontSize: typography.h6.fontSize,
    fontWeight: typography.h6.fontWeight as any,
    lineHeight: typography.h6.lineHeight,
    color: colors.text,
    marginBottom: spacing.md,
    marginHorizontal: spacing.lg,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  vehicleCard: {
    width: 100,
    alignItems: "center",
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surfaceVariant,
    borderRadius: borderRadius.lg,
    borderWidth: 1.5,
    borderColor: "transparent",
    ...elevation.sm,
  },
  vehicleCardSelected: {
    backgroundColor: colors.secondaryLight,
    borderColor: colors.secondary,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  iconContainerSelected: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  vehicleName: {
    fontSize: typography.label.fontSize,
    fontWeight: typography.label.fontWeight as any,
    lineHeight: typography.label.lineHeight,
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.xs,
  },
  vehicleNameSelected: {
    color: colors.secondary,
    fontWeight: "700",
  },
  vehicleDescription: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight as any,
    lineHeight: typography.caption.lineHeight,
    color: colors.textTertiary,
    textAlign: "center",
  },
  vehicleDescriptionSelected: {
    color: colors.textSecondary,
    fontWeight: "500",
  },
});
