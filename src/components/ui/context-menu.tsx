import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, ScrollView } from "react-native"
import { Check, ChevronRight, Circle } from "lucide-react-native"

// Context to handle opening/closing the menu
const ContextMenuContext = React.createContext<any>(null)

const ContextMenu = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <ContextMenuContext.Provider value={{ visible, setVisible }}>
      {children}
    </ContextMenuContext.Provider>
  )
}

const ContextMenuTrigger = ({ children, disabled }: any) => {
  const { setVisible } = React.useContext(ContextMenuContext)
  return (
    <Pressable 
      disabled={disabled}
      onLongPress={() => setVisible(true)}
      delayLongPress={500}
    >
      {children}
    </Pressable>
  )
}

const ContextMenuContent = ({ children }: any) => {
  const { visible, setVisible } = React.useContext(ContextMenuContext)
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setVisible(false)}>
      <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
        <View style={styles.content}>
          <ScrollView bounces={false}>{children}</ScrollView>
        </View>
      </Pressable>
    </Modal>
  )
}

const ContextMenuItem = ({ children, onPress, inset }: any) => {
  const { setVisible } = React.useContext(ContextMenuContext)
  return (
    <Pressable 
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed, inset && { paddingLeft: 32 }]}
      onPress={() => {
        onPress?.();
        setVisible(false);
      }}
    >
      <Text style={styles.itemText}>{children}</Text>
    </Pressable>
  )
}

const ContextMenuLabel = ({ children, inset }: any) => (
  <View style={[styles.label, inset && { paddingLeft: 32 }]}>
    <Text style={styles.labelText}>{children}</Text>
  </View>
)

const ContextMenuSeparator = () => <View style={styles.separator} />

const ContextMenuShortcut = ({ children }: any) => (
  <Text style={styles.shortcut}>{children}</Text>
)

// Placeholder components to maintain compatibility with your other files
const ContextMenuGroup = View
const ContextMenuPortal = ({ children }: any) => children
const ContextMenuSub = ({ children }: any) => children
const ContextMenuSubContent = View
const ContextMenuSubTrigger = View
const ContextMenuRadioGroup = View
const ContextMenuCheckboxItem = View
const ContextMenuRadioItem = View

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    width: '80%',
    backgroundColor: '#1e293b',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 4,
    shadowColor: "#000",
    elevation: 5,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemPressed: {
    backgroundColor: '#334155',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 14,
  },
  label: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  labelText: {
    color: '#94a3b8',
    fontSize: 12,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginVertical: 4,
  },
  shortcut: {
    marginLeft: 'auto',
    fontSize: 10,
    color: '#64748b',
  },
})

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
}