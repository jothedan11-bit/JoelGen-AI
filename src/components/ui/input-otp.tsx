import * as React from "react"
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { Dot } from "lucide-react-native"

const InputOTPContext = React.createContext<any>(null)

const InputOTP = React.forwardRef<any, any>(({ 
  value = "", 
  onChangeText, 
  maxLength = 6, 
  children, 
  style 
}, ref) => {
  const inputRef = React.useRef<TextInput>(null)

  const handlePress = () => {
    inputRef.current?.focus()
  }

  return (
    <InputOTPContext.Provider value={{ value, maxLength }}>
      <Pressable onPress={handlePress} style={[styles.container, style]}>
        {children}
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          keyboardType="number-pad"
          style={styles.hiddenInput}
          caretHidden
        />
      </Pressable>
    </InputOTPContext.Provider>
  )
})

const InputOTPGroup = ({ children, style }: any) => (
  <View style={[styles.group, style]}>{children}</View>
)

const InputOTPSlot = ({ index, style }: { index: number; style?: any }) => {
  const { value } = React.useContext(InputOTPContext)
  const char = value[index]
  const isActive = value.length === index

  return (
    <View style={[
      styles.slot, 
      isActive && styles.slotActive, 
      style
    ]}>
      <Text style={styles.slotText}>{char}</Text>
      {isActive && <View style={styles.caret} />}
    </View>
  )
}

const InputOTPSeparator = () => (
  <View style={styles.separator}>
    <Dot size={24} color="#64748b" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    width: 1,
    height: 1,
  },
  group: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    overflow: 'hidden',
  },
  slot: {
    width: 40,
    height: 48,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#334155',
  },
  slotActive: {
    borderColor: '#8b5cf6',
    borderWidth: 1,
    zIndex: 10,
  },
  slotText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  caret: {
    position: 'absolute',
    width: 2,
    height: 16,
    backgroundColor: '#8b5cf6',
  },
  separator: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }