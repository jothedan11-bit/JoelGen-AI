import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity } from "react-native"

const HoverCardContext = React.createContext<{ visible: boolean; setVisible: (v: boolean) => void }>({
  visible: false,
  setVisible: () => {},
})

const HoverCard = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <HoverCardContext.Provider value={{ visible, setVisible }}>
      {children}
    </HoverCardContext.Provider>
  )
}

const HoverCardTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(HoverCardContext)
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      {children}
    </TouchableOpacity>
  )
}

const HoverCardContent = React.forwardRef<View, any>(({ style, children, ...props }, ref) => {
  const { visible, setVisible } = React.useContext(HoverCardContext)

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

HoverCardContent.displayName = "HoverCardContent"

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: 256, // matches w-64
    backgroundColor: '#1e293b',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 16,
    shadowColor: "#000",
    elevation: 5,
  },
})

export { HoverCard, HoverCardTrigger, HoverCardContent }