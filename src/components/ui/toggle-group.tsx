import * as React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
// Relative path to kill the "@" alias error
import { cn } from "../../lib/utils"

const ToggleGroupContext = React.createContext<{
  value?: string | string[]
  onValueChange?: (val: any) => void
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}>({})

const ToggleGroup = React.forwardRef<View, any>(
  ({ className, style, variant = "default", size = "default", value, onValueChange, children, ...props }, ref) => {
    return (
      <ToggleGroupContext.Provider value={{ value, onValueChange, variant, size }}>
        <View
          ref={ref}
          style={cn(styles.root, style) as any}
          {...props}
        >
          {children}
        </View>
      </ToggleGroupContext.Provider>
    )
  }
)
ToggleGroup.displayName = "ToggleGroup"

const ToggleGroupItem = React.forwardRef<View, any>(
  ({ className, style, children, value: itemValue, variant: itemVariant, size: itemSize, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext)
    
    // Logic for single or multiple selection
    const isSelected = Array.isArray(context.value) 
      ? context.value.includes(itemValue) 
      : context.value === itemValue

    const handlePress = () => {
      if (!context.onValueChange) return
      
      if (Array.isArray(context.value)) {
        const newValue = isSelected
          ? context.value.filter((v) => v !== itemValue)
          : [...context.value, itemValue]
        context.onValueChange(newValue)
      } else {
        context.onValueChange(itemValue)
      }
    }

    const variant = itemVariant || context.variant
    const size = itemSize || context.size

    return (
      <TouchableOpacity
        ref={ref as any}
        onPress={handlePress}
        style={cn(
          styles.item,
          variant === "outline" && styles.outline,
          size === "sm" && styles.sm,
          size === "lg" && styles.lg,
          isSelected && styles.selected,
          style
        ) as any}
        {...props}
      >
        {/* We assume children are icons or text handled by the parent */}
        {children}
      </TouchableOpacity>
    )
  }
)
ToggleGroupItem.displayName = "ToggleGroupItem"

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4, // gap-1 (4px)
  },
  item: {
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 40,
    minHeight: 40,
  },
  selected: {
    backgroundColor: '#f1f5f9', // bg-muted (standard Shadcn selected state)
  },
  outline: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  sm: {
    padding: 4,
    minWidth: 32,
    minHeight: 32,
  },
  lg: {
    padding: 12,
    minWidth: 48,
    minHeight: 48,
  }
})

export { ToggleGroup, ToggleGroupItem }