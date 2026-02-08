import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity, Dimensions } from "react-native"
import { X } from "lucide-react-native"

const SheetContext = React.createContext<any>(null)

const Sheet = ({ children }: any) => {
  const [open, setOpen] = React.useState(false)
  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

const SheetTrigger = ({ children }: any) => {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <TouchableOpacity onPress={() => setOpen(true)}>
      {children}
    </TouchableOpacity>
  )
}

const SheetClose = ({ children }: any) => {
  const { setOpen } = React.useContext(SheetContext)
  return (
    <TouchableOpacity onPress={() => setOpen(false)}>
      {children}
    </TouchableOpacity>
  )
}

const SheetContent = ({ side = "right", children, style }: any) => {
  const { open, setOpen } = React.useContext(SheetContext)

  // Mapping web "sides" to Native flex positions
  const getSideStyle = () => {
    switch (side) {
      case "top": return { justifyContent: 'flex-start' };
      case "bottom": return { justifyContent: 'flex-end' };
      case "left": return { flexDirection: 'row', justifyContent: 'flex-start' };
      default: return { flexDirection: 'row', justifyContent: 'flex-end' };
    }
  };

  const getContentSize = () => {
    if (side === "top" || side === "bottom") return { width: '100%', height: '40%' };
    return { width: '80%', height: '100%' };
  };

  return (
    <Modal
      transparent
      visible={open}
      animationType={side === "bottom" ? "slide" : "fade"}
      onRequestClose={() => setOpen(false)}
    >
      <Pressable style={[styles.overlay, getSideStyle() as any]} onPress={() => setOpen(false)}>
        <Pressable style={[styles.content, getContentSize(), style]} onPress={(e) => e.stopPropagation()}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setOpen(false)}>
            <X size={20} color="#64748b" />
          </TouchableOpacity>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const SheetHeader = ({ children, style }: any) => <View style={[styles.header, style]}>{children}</View>
const SheetFooter = ({ children, style }: any) => <View style={[styles.footer, style]}>{children}</View>
const SheetTitle = ({ children, style }: any) => <Text style={[styles.title, style]}>{children}</Text>
const SheetDescription = ({ children, style }: any) => <Text style={[styles.description, style]}>{children}</Text>
const SheetPortal = ({ children }: any) => children
const SheetOverlay = () => null

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: '#ffffff',
    padding: 24,
    shadowColor: "#000",
    elevation: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 16,
    zIndex: 10,
  },
  header: {
    marginBottom: 16,
  },
  footer: {
    marginTop: 'auto',
    paddingTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },
  description: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
})

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}