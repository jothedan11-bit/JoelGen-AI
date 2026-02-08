import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Check, ChevronRight, Circle } from "lucide-react-native"

const MenubarContext = React.createContext<any>(null)

const Menubar = ({ children, style }: any) => (
  <View style={[styles.menubar, style]}>{children}</View>
)

const MenubarMenu = ({ children }: any) => {
  const [visible, setVisible] = React.useState(false)
  return (
    <MenubarContext.Provider value={{ visible, setVisible }}>
      <View>{children}</View>
    </MenubarContext.Provider>
  )
}

const MenubarTrigger = ({ children }: any) => {
  const { setVisible } = React.useContext(MenubarContext)
  return (
    <TouchableOpacity style={styles.trigger} onPress={() => setVisible(true)}>
      <Text style={styles.triggerText}>{children}</Text>
    </TouchableOpacity>
  )
}

const MenubarContent = ({ children }: any) => {
  const { visible, setVisible } = React.useContext(MenubarContext)
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

const MenubarItem = ({ children, onPress }: any) => {
  const { setVisible } = React.useContext(MenubarContext)
  return (
    <Pressable 
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={() => {
        onPress?.();
        setVisible(false);
      }}
    >
      <Text style={styles.itemText}>{children}</Text>
    </Pressable>
  )
}

const MenubarSeparator = () => <View style={styles.separator} />

const MenubarLabel = ({ children }: any) => (
  <View style={styles.label}>
    <Text style={styles.labelText}>{children}</Text>
  </View>
)

const MenubarShortcut = ({ children }: any) => (
  <Text style={styles.shortcut}>{children}</Text>
)

// Placeholders for complex sub-components
const MenubarGroup = View
const MenubarPortal = ({ children }: any) => children
const MenubarSub = ({ children }: any) => children
const MenubarSubContent = View
const MenubarSubTrigger = View
const MenubarRadioGroup = View
const MenubarCheckboxItem = View
const MenubarRadioItem = View

const styles = StyleSheet.create({
  menubar: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    backgroundColor: '#0f172a',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#1e293b',
    padding: 4,
  },
  trigger: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  triggerText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    backgroundColor: '#1e293b',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155',
    padding: 4,
    elevation: 5,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
}