import * as React from "react"
import { Text, StyleSheet } from "react-native"

const Label = React.forwardRef<Text, any>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.label, style]}
    {...props}
  />
))

Label.displayName = "Label"

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: '#0f172a', // text-foreground (Adjust to #ffffff if in dark mode)
  },
})

export { Label }