import * as React from "react"
import { View, Text, StyleSheet, Modal, Pressable, TouchableOpacity } from "react-native"
import { ChevronDown } from "lucide-react-native"

const NavigationMenuContext = React.createContext<any>(null)

const NavigationMenu = ({ children, style }: any) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)
  return (
    <NavigationMenuContext.Provider value={{ activeItem, setActiveItem }}>
      <View style={[styles.menu, style]}>{children}</View>
    </NavigationMenuContext.Provider>
  )
}

const NavigationMenuList = ({ children, style }: any) => (
  <View style={[styles.list, style]}>{children}</View>
)

const NavigationMenuItem = ({ children }: any) => (
  <View>{children}</View>
)

const NavigationMenuTrigger = ({ children, value }: any) => {
  const { setActiveItem } = React.useContext(NavigationMenuContext)
  return (
    <TouchableOpacity 
      style={styles.trigger} 
      onPress={() => setActiveItem(value)}
    >
      <Text style={styles.triggerText}>{children}</Text>
      <ChevronDown size={12} color="#64748b" style={{ marginLeft: 4 }} />
    </TouchableOpacity>
  )
}

const NavigationMenuContent = ({ children, value }: any) => {
  const { activeItem, setActiveItem } = React.useContext(NavigationMenuContext)
  const visible = activeItem === value

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={() => setActiveItem(null)}>
      <Pressable style={styles.overlay} onPress={() => setActiveItem(null)}>
        <View style={styles.content}>
          {children}
        </View>
      </Pressable>
    </Modal>
  )
}

// Simplified helpers to avoid build errors
const NavigationMenuLink = ({ children, onPress }: any) => (
  <TouchableOpacity onPress={onPress} style={styles.link}>
    <Text style={styles.linkText}>{children}</Text>
  </TouchableOpacity>
)

const NavigationMenuViewport = () => null
const NavigationMenuIndicator = () => null
const navigationMenuTriggerStyle = () => ({})

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  triggerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0f172a',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    elevation: 5,
  },
  link: {
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#0f172a',
  }
})

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}