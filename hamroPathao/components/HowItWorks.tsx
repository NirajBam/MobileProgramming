import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  elevation,
  typography,
} from "../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Step {
  number: number;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    icon: "magnify",
    title: "Request",
    description: "Tell us your furniture and location",
  },
  {
    number: 2,
    icon: "check-circle",
    title: "Match",
    description: "Get matched with trusted drivers",
  },
  {
    number: 3,
    icon: "truck-fast",
    title: "Move",
    description: "Sit back and relax",
  },
];

export default function HowItWorks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How it works</Text>
      <View style={styles.stepsContainer}>
        {STEPS.map((step, index) => (
          <View key={step.number} style={styles.stepWrapper}>
            <View style={styles.stepContent}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name={step.icon}
                  size={28}
                  color={colors.primary}
                />
              </View>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </View>
            {index < STEPS.length - 1 && <View style={styles.connector} />}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xxxl,
    marginHorizontal: spacing.lg,
  },
  title: {
    fontSize: typography.h4.fontSize,
    fontWeight: typography.h4.fontWeight as any,
    lineHeight: typography.h4.lineHeight,
    color: colors.text,
    marginBottom: spacing.xxl,
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  stepWrapper: {
    flex: 1,
    alignItems: "center",
  },
  stepContent: {
    alignItems: "center",
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: spacing.lg,
    ...elevation.sm,
  },
  stepTitle: {
    fontSize: typography.h6.fontSize,
    fontWeight: typography.h6.fontWeight as any,
    lineHeight: typography.h6.lineHeight,
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: "center",
  },
  stepDescription: {
    fontSize: typography.bodySmall.fontSize,
    fontWeight: typography.bodySmall.fontWeight as any,
    lineHeight: typography.bodySmall.lineHeight,
    color: colors.textSecondary,
    textAlign: "center",
    maxWidth: 100,
  },
  connector: {
    position: "absolute",
    top: 32,
    left: "50%",
    width: "100%",
    height: 2,
    backgroundColor: colors.border,
    transform: [{ translateX: spacing.lg }],
  },
});
