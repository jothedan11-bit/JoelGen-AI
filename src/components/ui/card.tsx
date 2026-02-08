import * as React from "react"
import { View, Text, StyleSheet, ViewStyle } from "react-native"

const Card = React.forwardRef<View, { style?: ViewStyle; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <View
      ref={ref}
      style={[styles.card, style]}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<View, { style?: ViewStyle; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <View ref={ref} style={[styles.header, style]} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<Text, { style?: any; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <Text ref={ref} style={[styles.title, style]} {...props} />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<Text, { style?: any; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <Text ref={ref} style={[styles.description, style]} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<View, { style?: ViewStyle; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <View ref={ref} style={[styles.content, style]} {...props} />
  )
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<View, { style?: ViewStyle; children?: React.ReactNode }>(
  ({ style, ...props }, ref) => (
    <View ref={ref} style={[styles.footer, style]} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: '#1e293b', // bg-card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android shadow
    marginVertical: 8,
  },
  header: {
    padding: 24,
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 14,
    color: '#94a3b8',
  },
  content: {
    padding: 24,
    paddingTop: 0,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    paddingTop: 0,
  },
})

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }