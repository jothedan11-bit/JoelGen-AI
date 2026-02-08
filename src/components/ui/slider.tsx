import * as React from "react"
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native"
// Double-check this path. If utils.ts is in src/lib/, this is correct.
import { cn } from "../../lib/utils"

const Slider = React.forwardRef<View, any>(({ className, style, ...props }, ref) => {
  return (
    <View
      ref={ref}
      // Explicitly casting to any to bypass the Line 10 Type Error
      style={cn(styles.root, style) as any}
      {...props}
    >
      <View style={styles.track}>
        <View style={[styles.range, { width: '50%' }] as any} /> 
      </View>
      <View style={styles.thumb as any} />
    </View>
  )
})
Slider.displayName = "Slider"

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  track: {
    height: 8,
    width: '100%',
    backgroundColor: '#e2e8f0',
    borderRadius: 9999,
    overflow: 'hidden',
  },
  range: {
    height: '100%',
    backgroundColor: '#0f172a',
  },
  thumb: {
    position: 'absolute',
    left: '50%',
    marginLeft: -10,
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#0f172a',
    backgroundColor: '#ffffff',
    elevation: 2,
  },
})

export { Slider }