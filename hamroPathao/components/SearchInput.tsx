import {
  View,
  TextInput,
  TouchableOpacity,
  ViewStyle,
  StyleSheet,
} from "react-native";
import {
  colors,
  spacing,
  borderRadius,
  elevation,
  typography,
} from "../lib/theme";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  editable?: boolean;
  style?: ViewStyle;
}

export default function SearchInput({
  placeholder,
  value,
  onChangeText,
  onPress,
  icon = "search",
  editable = true,
  style,
}: SearchInputProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      disabled={!onPress && editable}
      style={[styles.container, style]}
    >
      <Ionicons
        name={icon}
        size={18}
        color={colors.textSecondary}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
        placeholderTextColor={colors.textTertiary}
        style={styles.input}
      />
      {value.length > 0 && (
        <TouchableOpacity
          onPress={() => onChangeText("")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="close-circle"
            size={18}
            color={colors.textSecondary}
          />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginVertical: spacing.sm,
    ...elevation.sm,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  icon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.bodyMedium.fontSize,
    color: colors.text,
  },
});
