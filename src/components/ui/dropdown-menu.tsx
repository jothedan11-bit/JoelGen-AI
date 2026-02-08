import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Check, ChevronRight, Circle } from "lucide-react-native"

const DropdownMenuContext = React.createContext<any>(null)

const DropdownMenu = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <DropdownMenuContext.Provider value={{ visible, setVisible }}>
      {children}
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(DropdownMenuContext)
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      {children}
    </TouchableOpacity>
  )
}

const DropdownMenuContent = ({ children }: any) => {
  const { visible, setVisible } = React.useContext(DropdownMenuContext)
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

const DropdownMenuItem = ({ children, onPress, inset }: any) => {
  const { setVisible } = React.useContext(DropdownMenuContext)
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

const DropdownMenuLabel = ({ children, inset }: any) => (
  <View style={[styles.label, inset && { paddingLeft: 32 }]}>
    <Text style={styles.labelText}>{children}</Text>
  </View>
)

const DropdownMenuSeparator = () => <View style={styles.separator} />

const DropdownMenuShortcut = ({ children }: any) => (
  <Text style={styles.shortcut}>{children}</Text>
)

// Placeholders for advanced sub-menu components to keep types happy
const DropdownMenuGroup = View
const DropdownMenuPortal = ({ children }: any) => children
const DropdownMenuSub = ({ children }: any) => children
const DropdownMenuSubContent = View
const DropdownMenuSubTrigger = View
const DropdownMenuRadioGroup = View
const DropdownMenuCheckboxItem = View
const DropdownMenuRadioItem = View

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '75%',
    backgroundColor: '#1e293b', // bg-popover
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 6,
    elevation: 5,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 6,
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
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#334155',
    marginVertical: 4,
  },
  shortcut: {
    marginLeft: 'auto',
    fontSize: 10,
    color: '#64748b',
  },
})

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}