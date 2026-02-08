import * as React from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native"
import { X } from "lucide-react-native"

const DialogContext = React.createContext<{ visible: boolean; setVisible: (v: boolean) => void }>({
  visible: false,
  setVisible: () => {},
})

const Dialog = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <DialogContext.Provider value={{ visible, setVisible }}>
      {children}
    </DialogContext.Provider>
  )
}

const DialogTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(DialogContext)
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      {children}
    </TouchableOpacity>
  )
}

const DialogPortal = ({ children }: any) => <>{children}</>
const DialogClose = ({ children }: any) => {
  const { setVisible } = React.useContext(DialogContext)
  return (
    <TouchableOpacity onPress={() => setVisible(false)}>
      {children}
    </TouchableOpacity>
  )
}

const DialogContent = ({ children, style }: any) => {
  const { visible, setVisible } = React.useContext(DialogContext)
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
        <Pressable style={[styles.content, style]}>
          <TouchableOpacity 
            style={styles.closeButton} 
            onPress={() => setVisible(false)}
          >
            <X size={20} color="#94a3b8" />
          </TouchableOpacity>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const DialogHeader = ({ children, style }: any) => (
  <View style={[styles.header, style]}>{children}</View>
)

const DialogFooter = ({ children, style }: any) => (
  <View style={[styles.footer, style]}>{children}</View>
)

const DialogTitle = ({ children, style }: any) => (
  <Text style={[styles.title, style]}>{children}</Text>
)

const DialogDescription = ({ children, style }: any) => (
  <Text style={[styles.description, style]}>{children}</Text>
)

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#0f172a', // Slate 950
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1e293b',
    padding: 24,
    gap: 16,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
  },
  header: {
    flexDirection: 'column',
    gap: 4,
  },
  footer: {
    flexDirection: 'column-reverse',
    gap: 8,
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  description: {
    fontSize: 14,
    color: '#94a3b8',
  },
})

export {
  Dialog,
  DialogPortal,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}