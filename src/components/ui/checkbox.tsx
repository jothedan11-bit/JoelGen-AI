import * as React from "react"
import { Pressable, View, StyleSheet } from "react-native"
import { Check } from "lucide-react-native"

const Checkbox = React.forwardRef<View, any>(({ checked, onCheckedChange, style, ...props }, ref) => {
  return (
    <Pressable
      ref={ref}
      onPress={() => onCheckedChange?.(!checked)}
      style={[
        styles.root,
        checked && styles.checked,
        style
      ]}
      {...props}
    >
      {checked && (
        <View style={styles.indicator}>
          <Check size={14} color="#ffffff" strokeWidth={3} />
        </View>
      )}
    </Pressable>
  )
})

Checkbox.displayName = "Checkbox"

const styles = StyleSheet.create({
  root: {
    height: 20,
    width: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#8b5cf6', // primary color
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  checked: {
    backgroundColor: '#8b5cf6',
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export { Checkbox }