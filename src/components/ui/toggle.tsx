import * as React from "react"
import { TouchableOpacity, StyleSheet, View } from "react-native"
// Relative path fix for the "@" alias error
import { cn } from "../../lib/utils"

const Toggle = React.forwardRef<View, any>(
  ({ className, style, variant = "default", size = "default", pressed, onPressedChange, ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref as any}
        onPress={() => onPressedChange?.(!pressed)}
        activeOpacity={0.7}
        style={cn(
          styles.base,
          variant === "outline" && styles.outline,
          size === "sm" && styles.sm,
          size === "lg" && styles.lg,
          pressed && styles.pressed,
          style
        ) as any}
        {...props}
      />
    )
  }
)

Toggle.displayName = "Toggle"

const styles = StyleSheet.create({
  base: {
    // FIX: Changed inlineFlex (Web) to flexDirection (Native)
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: 'transparent',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  default: {
    height: 40,
    paddingHorizontal: 12,
    minWidth: 40,
  },
  sm: {
    height: 32,
    paddingHorizontal: 8,
    minWidth: 32,
  },
  lg: {
    height: 48,
    paddingHorizontal: 16,
    minWidth: 48,
  },
  pressed: {
    backgroundColor: '#f1f5f9',
  },
})

export { Toggle }