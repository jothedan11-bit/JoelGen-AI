import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Check, ChevronDown, ChevronUp } from "lucide-react-native"

const SelectContext = React.createContext<any>(null)

const Select = ({ children, onValueChange, value }: any) => {
  const [open, setOpen] = React.useState(false)
  return (
    <SelectContext.Provider value={{ open, setOpen, onValueChange, value }}>
      <View>{children}</View>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef<View, any>(({ style, children, ...props }, ref) => {
  const { setOpen } = React.useContext(SelectContext)
  return (
    <TouchableOpacity 
      ref={ref} 
      style={[styles.trigger, style]} 
      onPress={() => setOpen(true)}
      {...props}
    >
      <View style={styles.triggerContent}>{children}</View>
      <ChevronDown size={16} color="#64748b" />
    </TouchableOpacity>
  )
})

const SelectValue = ({ placeholder }: { placeholder?: string }) => {
  const { value } = React.useContext(SelectContext)
  return <Text style={styles.valueText}>{value || placeholder}</Text>
}

const SelectContent = ({ children }: any) => {
  const { open, setOpen } = React.useContext(SelectContext)
  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={() => setOpen(false)}>
      <Pressable style={styles.overlay} onPress={() => setOpen(false)}>
        <View style={styles.content}>
          <ScrollView bounces={false}>{children}</ScrollView>
        </View>
      </Pressable>
    </Modal>
  )
}

const SelectItem = React.forwardRef<View, any>(({ children, value: itemValue, style }, ref) => {
  const { value, onValueChange, setOpen } = React.useContext(SelectContext)
  const isSelected = value === itemValue

  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.item, style]}
      onPress={() => {
        onValueChange?.(itemValue)
        setOpen(false)
      }}
    >
      <View style={styles.indicator}>
        {isSelected && <Check size={16} color="#0f172a" />}
      </View>
      <Text style={styles.itemText}>{children}</Text>
    </TouchableOpacity>
  )
})

const SelectLabel = ({ children }: any) => (
  <Text style={styles.label}>{children}</Text>
)

const SelectSeparator = () => <View style={styles.separator} />

// Native handles scrolling internally, so these are stubs to prevent import errors
const SelectGroup = View
const SelectScrollUpButton = () => null
const SelectScrollDownButton = () => null

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: '#ffffff',
    paddingHorizontal: 12,
  },
  triggerContent: {
    flex: 1,
  },
  valueText: {
    fontSize: 14,
    color: '#0f172a',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end', // Slide up from bottom like a native picker
  },
  content: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 8,
    maxHeight: '50%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  indicator: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#0f172a',
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginVertical: 4,
  },
})

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}