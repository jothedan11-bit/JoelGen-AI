import * as React from "react"
import { View, StyleSheet } from "react-native"

const Progress = React.forwardRef<View, any>(({ style, value, ...props }, ref) => {
  // Ensure value is between 0 and 100
  const safeValue = Math.min(Math.max(value || 0, 0), 100);

  return (
    <View
      ref={ref}
      style={[styles.root, style]}
      {...props}
    >
      <View
        style={[
          styles.indicator,
          { width: `${safeValue}%` }
        ]}
      />
    </View>
  )
})

Progress.displayName = "Progress"

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    height: 16, // h-4
    width: '100%',
    overflow: 'hidden',
    borderRadius: 9999, // rounded-full
    backgroundColor: '#e2e8f0', // bg-secondary (Slate 200)
  },
  indicator: {
    height: '100%',
    backgroundColor: '#0f172a', // bg-primary (Slate 900)
  },
})

export { Progress }