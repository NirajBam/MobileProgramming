import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  colors,
  spacing,
  typography,
  borderRadius,
  elevation,
} from "../lib/theme";

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "large" | "medium" | "small";
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Button({
  onPress,
  label,
  variant = "primary",
  size = "large",
  disabled = false,
  style,
  textStyle,
}: ButtonProps) {
  const getButtonStyle = () => {
    const baseStyle: ViewStyle = {
      borderRadius: borderRadius.lg,
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    };

    switch (size) {
      case "large":
        baseStyle.paddingVertical = spacing.lg;
        break;
      case "medium":
        baseStyle.paddingVertical = spacing.md;
        break;
      case "small":
        baseStyle.paddingVertical = spacing.sm;
        break;
    }

    switch (variant) {
      case "primary":
        baseStyle.backgroundColor = disabled
          ? colors.textTertiary
          : colors.secondary;
        break;
      case "secondary":
        baseStyle.backgroundColor = disabled
          ? colors.borderLight
          : colors.primaryLight;
        break;
      case "outline":
        baseStyle.backgroundColor = "transparent";
        baseStyle.borderWidth = 1.5;
        baseStyle.borderColor = disabled ? colors.border : colors.primary;
        break;
    }

    if (!disabled) {
      Object.assign(baseStyle, elevation.sm);
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle: TextStyle = {
      fontSize: typography.buttonMedium.fontSize,
      fontWeight: typography.buttonMedium.fontWeight as any,
      lineHeight: typography.buttonMedium.lineHeight,
    };

    switch (variant) {
      case "primary":
        baseTextStyle.color = colors.white;
        break;
      case "secondary":
        baseTextStyle.color = disabled ? colors.textTertiary : colors.primary;
        break;
      case "outline":
        baseTextStyle.color = disabled ? colors.textTertiary : colors.primary;
        break;
    }

    return baseTextStyle;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      style={[getButtonStyle(), style]}
    >
      <Text style={[getTextStyle(), textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
