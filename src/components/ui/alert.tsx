import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

// We define the styles here to replace 'cva' and 'cn'
const Alert = React.forwardRef<View, any>(({ style, variant, children, ...props }, ref) => (
  <View
    ref={ref}
    style={[
      styles.base,
      variant === "destructive" ? styles.destructive : styles.default,
      style
    ]}
    {...props}
  >
    {children}
  </View>
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<Text, any>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.title, style]}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<Text, any>(({ style, ...props }, ref) => (
  <Text
    ref={ref}
    style={[styles.description, style]}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

const styles = StyleSheet.create({
  base: {
    position: 'relative',
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  default: {
    backgroundColor: '#0f172a', // Slate 950
    borderColor: '#1e293b',     // Slate 800
  },
  destructive: {
    backgroundColor: 'rgba(127, 29, 29, 0.1)', // Red 900 with alpha
    borderColor: '#ef4444',                    // Red 500
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  description: {
    color: '#94a3b8', // Slate 400
    fontSize: 14,
    lineHeight: 20,
  }
})

export { Alert, AlertTitle, AlertDescription }