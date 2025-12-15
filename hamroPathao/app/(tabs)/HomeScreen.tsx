import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  elevation,
} from "../../lib/theme";
import SearchInput from "../../components/SearchInput";
import VehicleCarousel from "../../components/VehicleCarousel";
import HowItWorks from "../../components/HowItWorks";
import PromoBanner from "../../components/PromoBanner";
import Button from "../../components/Button";

interface Vehicle {
  id: string;
  name: string;
  description: string;
}

export default function HomeScreen() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleFindVehicle = () => {
    console.log("Finding vehicle:", {
      location: pickupLocation,
      vehicle: selectedVehicle,
    });
  };

  return (
    <SafeAreaView edges={["top"]} style={[styles.container]}>
      {/* Header Navigation */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <MaterialCommunityIcons
            name="truck-fast"
            size={28}
            color={colors.primary}
          />
          <Text style={styles.logoText}>FurniMove</Text>
        </View>
        <TouchableOpacity style={styles.profileButton} activeOpacity={0.7}>
          <Ionicons name="person-circle" size={32} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Move your furniture with ease</Text>
          <Text style={styles.heroSubtitle}>
            Fast, reliable, and affordable moving services
          </Text>

          {/* Search Inputs */}
          <View style={styles.searchSection}>
            <SearchInput
              placeholder="Where do you need to move furniture?"
              value={pickupLocation}
              onChangeText={setPickupLocation}
              icon="location"
            />
          </View>

          {/* Vehicle Carousel */}
          <VehicleCarousel onSelectVehicle={setSelectedVehicle} />

          {/* Find Vehicle Button */}
          <Button
            label="Find Vehicle"
            onPress={handleFindVehicle}
            variant="primary"
            size="large"
            disabled={!pickupLocation || !selectedVehicle}
            style={styles.findButton}
          />
        </View>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Promotional Banner */}
        <PromoBanner onPress={() => console.log("Promo banner pressed")} />

        {/* Additional Feature Section */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Why choose FurniMove?</Text>
          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={24}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.featureTitle}>Trusted Drivers</Text>
              <Text style={styles.featureText}>
                Verified and insured professionals
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MaterialCommunityIcons
                  name="clock-fast"
                  size={24}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.featureTitle}>Quick Booking</Text>
              <Text style={styles.featureText}>
                Available within 30 minutes
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MaterialCommunityIcons
                  name="tag-multiple"
                  size={24}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.featureTitle}>Best Prices</Text>
              <Text style={styles.featureText}>
                Transparent pricing, no hidden fees
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIcon}>
                <MaterialCommunityIcons
                  name="phone-check"
                  size={24}
                  color={colors.secondary}
                />
              </View>
              <Text style={styles.featureTitle}>24/7 Support</Text>
              <Text style={styles.featureText}>
                Always here when you need us
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Padding */}
        <View style={{ height: spacing.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  logoText: {
    fontSize: typography.h5.fontSize,
    fontWeight: typography.h5.fontWeight as any,
    lineHeight: typography.h5.lineHeight,
    color: colors.primary,
  },
  profileButton: {
    padding: spacing.sm,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  heroSection: {
    marginBottom: spacing.xxxl,
  },
  heroTitle: {
    fontSize: typography.h2.fontSize,
    fontWeight: typography.h2.fontWeight as any,
    lineHeight: typography.h2.lineHeight,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  heroSubtitle: {
    fontSize: typography.bodyLarge.fontSize,
    fontWeight: typography.bodyLarge.fontWeight as any,
    lineHeight: typography.bodyLarge.lineHeight,
    color: colors.textSecondary,
    marginBottom: spacing.xxl,
  },
  searchSection: {
    marginBottom: spacing.lg,
  },
  findButton: {
    marginHorizontal: 0,
    paddingHorizontal: spacing.lg,
  },
  featuredSection: {
    marginBottom: spacing.xxxl,
  },
  sectionTitle: {
    fontSize: typography.h4.fontSize,
    fontWeight: typography.h4.fontWeight as any,
    lineHeight: typography.h4.lineHeight,
    color: colors.text,
    marginBottom: spacing.lg,
  },
  featureGrid: {
    gap: spacing.lg,
  },
  featureCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: "center",
    ...elevation.sm,
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.secondaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.md,
  },
  featureTitle: {
    fontSize: typography.h6.fontSize,
    fontWeight: typography.h6.fontWeight as any,
    lineHeight: typography.h6.lineHeight,
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: "center",
  },
  featureText: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodySmall.fontWeight as any,
    lineHeight: typography.bodySmall.lineHeight,
    color: colors.textSecondary,
    textAlign: "center",
  },
});
