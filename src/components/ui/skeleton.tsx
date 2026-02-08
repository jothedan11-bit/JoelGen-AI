import * as React from "react"
import { View, StyleSheet } from "react-native"
// Change line 3 to a relative path to bypass alias errors
import { cn } from "../../lib/utils" 

function Skeleton({
  style,
  ...props
}: any) {
  return (
    <View
      style={cn(styles.skeleton, style)}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  skeleton: {
    borderRadius: 6,
    backgroundColor: '#e2e8f0', 
    minHeight: 20,
    width: '100%',
    opacity: 0.6,
  },
})

export { Skeleton }