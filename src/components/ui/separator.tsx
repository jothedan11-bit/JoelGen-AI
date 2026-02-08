import * as React from "react"
import { View, StyleSheet } from "react-native"

const Separator = React.forwardRef<View, any>(
  ({ style, orientation = "horizontal", ...props }, ref) => (
    <View
      ref={ref}
      style={[
        styles.base,
        orientation === "horizontal" ? styles.horizontal : styles.vertical,
        style,
      ]}
      {...props}
    />
  )
)

Separator.displayName = "Separator"

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#e2e8f0', // bg-border (Slate 200)
    flexShrink: 0,
  },
  horizontal: {
    height: 1,
    width: '100%',
  },
  vertical: {
    width: 1,
    height: '100%',
  },
})

export { Separator }