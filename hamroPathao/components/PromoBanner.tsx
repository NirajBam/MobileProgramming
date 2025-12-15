import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  elevation,
  typography,
} from "../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface PromoBannerProps {
  onPress?: () => void;
}

export default function PromoBanner({ onPress }: PromoBannerProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.textContent}>
          <Text style={styles.badge}>Limited Time</Text>
          <Text style={styles.title}>Save 25% on your first move</Text>
          <Text style={styles.description}>
            Use code FIRSTMOVE25 at checkout
          </Text>
        </View>
        <MaterialCommunityIcons
          name="gift"
          size={40}
          color={colors.white}
          style={styles.icon}
        />
      </View>
      <View style={styles.ctaContainer}>
        <Text style={styles.cta}>Apply Promo</Text>
        <MaterialCommunityIcons
          name="chevron-right"
          size={20}
          color={colors.secondary}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.lg,
    marginVertical: spacing.xl,
    backgroundColor: colors.primary,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    overflow: "hidden",
    ...elevation.md,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContent: {
    flex: 1,
  },
  badge: {
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight as any,
    lineHeight: typography.caption.lineHeight,
    color: colors.secondary,
    marginBottom: spacing.xs,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: typography.h5.fontSize,
    fontWeight: typography.h5.fontWeight as any,
    lineHeight: typography.h5.lineHeight,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  description: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodySmall.fontWeight as any,
    lineHeight: typography.bodySmall.lineHeight,
    color: colors.primaryLight,
  },
  icon: {
    marginLeft: spacing.lg,
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
  },
  cta: {
    fontSize: typography.label.fontSize,
    fontWeight: typography.label.fontWeight as any,
    lineHeight: typography.label.lineHeight,
    color: colors.secondary,
  },
});
