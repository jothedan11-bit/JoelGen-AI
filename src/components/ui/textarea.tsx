import * as React from "react"
import { TextInput, StyleSheet } from "react-native"
// Using relative path to kill the "@" alias error for the Phase 1 test
import { cn } from "../../lib/utils"

const Textarea = React.forwardRef<TextInput, any>(
  ({ className, style, placeholderTextColor, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={cn(styles.textarea, style) as any}
        // Native-specific props for Textarea behavior
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top" // Important: Prevents text from centering vertically on Android
        placeholderTextColor={placeholderTextColor || "#64748b"}
        {...props}
      />
    )
  }
)

Textarea.displayName = "Textarea"

const styles = StyleSheet.create({
  textarea: {
    minHeight: 80,
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0', // border-input
    backgroundColor: '#ffffff', // bg-background
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#0f172a',
  },
})

export { Textarea }