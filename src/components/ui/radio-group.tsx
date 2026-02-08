import * as React from "react"
import { View, StyleSheet, Pressable } from "react-native"
import { Circle } from "lucide-react-native"

const RadioGroupContext = React.createContext<{ 
  value?: string; 
  onValueChange?: (val: string) => void 
}>({})

const RadioGroup = React.forwardRef<View, any>(({ 
  style, 
  value, 
  onValueChange, 
  children, 
  ...props 
}, ref) => {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <View 
        ref={ref} 
        style={[styles.group, style]} 
        {...props}
      >
        {children}
      </View>
    </RadioGroupContext.Provider>
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<View, any>(({ 
  style, 
  value: itemValue, 
  ...props 
}, ref) => {
  const { value, onValueChange } = React.useContext(RadioGroupContext)
  const isSelected = value === itemValue

  return (
    <Pressable
      ref={ref}
      onPress={() => onValueChange?.(itemValue)}
      style={({ pressed }) => [
        styles.item,
        isSelected && styles.itemSelected,
        pressed && { opacity: 0.7 },
        style
      ]}
      {...props}
    >
      {isSelected && (
        <View style={styles.indicator}>
          <Circle size={10} fill="#0f172a" color="#0f172a" />
        </View>
      )}
    </Pressable>
  )
})
RadioGroupItem.displayName = "RadioGroupItem"

const styles = StyleSheet.create({
  group: {
    gap: 8, // gap-2 equivalent
  },
  item: {
    height: 16, // h-4
    width: 16, // w-4
    aspectRatio: 1,
    borderRadius: 8, // rounded-full
    borderWidth: 1,
    borderColor: '#0f172a', // border-primary
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  itemSelected: {
    borderColor: '#0f172a',
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { RadioGroup, RadioGroupItem }