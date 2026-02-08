import * as React from "react"
import { View, StyleSheet, Modal, Pressable, TouchableOpacity } from "react-native"

const PopoverContext = React.createContext<{ visible: boolean; setVisible: (v: boolean) => void }>({
  visible: false,
  setVisible: () => {},
})

const Popover = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <PopoverContext.Provider value={{ visible, setVisible }}>
      {children}
    </PopoverContext.Provider>
  )
}

const PopoverTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(PopoverContext)
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      {children}
    </TouchableOpacity>
  )
}

const PopoverContent = React.forwardRef<View, any>(({ style, children, ...props }, ref) => {
  const { visible, setVisible } = React.useContext(PopoverContext)

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
        <View 
          ref={ref} 
          style={[styles.content, style]} 
          {...props}
        >
          {children}
        </View>
      </Pressable>
    </Modal>
  )
})

PopoverContent.displayName = "PopoverContent"

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  content: {
    width: 288, // matches w-72 (72 * 4)
    backgroundColor: '#ffffff', // bg-popover
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export { Popover, PopoverTrigger, PopoverContent }