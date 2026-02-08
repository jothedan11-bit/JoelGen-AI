import * as React from "react"
import { Modal, View, Text, StyleSheet, Pressable, TouchableOpacity, Dimensions } from "react-native"

const { height: SCREEN_HEIGHT } = Dimensions.get("window")

const DrawerContext = React.createContext<{ visible: boolean; setVisible: (v: boolean) => void }>({
  visible: false,
  setVisible: () => {},
})

const Drawer = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <DrawerContext.Provider value={{ visible, setVisible }}>
      {children}
    </DrawerContext.Provider>
  )
}

const DrawerTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(DrawerContext)
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      {children}
    </TouchableOpacity>
  )
}

const DrawerPortal = ({ children }: any) => <>{children}</>

const DrawerClose = ({ children }: any) => {
  const { setVisible } = React.useContext(DrawerContext)
  return (
    <TouchableOpacity onPress={() => setVisible(false)}>
      {children}
    </TouchableOpacity>
  )
}

// THIS IS THE COMPONENT THAT WAS MISSING
const DrawerOverlay = () => {
  const { visible, setVisible } = React.useContext(DrawerContext)
  if (!visible) return null
  return (
    <Pressable 
      style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(0,0,0,0.5)' }]} 
      onPress={() => setVisible(false)} 
    />
  )
}

const DrawerContent = ({ children, style }: any) => {
  const { visible, setVisible } = React.useContext(DrawerContext)
  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={() => setVisible(false)}
    >
      <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
        <View style={styles.spacer} />
        <Pressable style={[styles.content, style]}>
          <View style={styles.handle} />
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const DrawerHeader = ({ children, style }: any) => (
  <View style={[styles.header, style]}>{children}</View>
)

const DrawerFooter = ({ children, style }: any) => (
  <View style={[styles.footer, style]}>{children}</View>
)

const DrawerTitle = ({ children, style }: any) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

const DrawerDescription = ({ children, style }: any) => (
  <Text style={[styles.description, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  spacer: {
    flex: 1,
  },
  content: {
    backgroundColor: '#0f172a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: '#1e293b',
    paddingBottom: 40,
    minHeight: SCREEN_HEIGHT * 0.4,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#334155',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 8,
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  footer: {
    padding: 16,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 4,
  },
})

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}