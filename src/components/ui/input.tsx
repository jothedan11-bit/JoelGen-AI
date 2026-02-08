import * as React from "react"
import { TextInput, StyleSheet, Platform } from "react-native"

const Input = React.forwardRef<TextInput, any>(
  ({ style, type, secureTextEntry, ...props }, ref) => {
    // Map web "type" to Native keyboard types
    const getKeyboardType = () => {
      switch (type) {
        case 'email': return 'email-address';
        case 'number': return 'numeric';
        case 'tel': return 'phone-pad';
        default: return 'default';
      }
    };

    return (
      <TextInput
        ref={ref}
        style={[styles.input, style]}
        keyboardType={getKeyboardType()}
        secureTextEntry={type === 'password' || secureTextEntry}
        placeholderTextColor="#64748b"
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    height: 40, // h-9 equivalent (36px) plus a little extra for native padding
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0', // border-input
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16, // text-base (prevents iOS auto-zoom)
    color: '#0f172a', // text-foreground
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      },
    }),
  },
})

export { Input }