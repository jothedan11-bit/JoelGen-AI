// src/lib/utils.ts
import { StyleSheet } from "react-native"

/**
 * Native-safe 'cn' equivalent.
 * React Native uses arrays for style composition.
 * Usage: style={cn(styles.base, isActive && styles.active, props.style)}
 */
export function cn(...inputs: any[]) {
  return inputs.flat().filter(Boolean)
}