import * as React from "react"
import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity 
} from "react-native"
import { Search } from "lucide-react-native"

const Command = ({ children, style }: any) => (
  <View style={[styles.container, style]}>{children}</View>
)

const CommandInput = React.forwardRef<TextInput, any>(({ style, ...props }, ref) => (
  <View style={styles.inputWrapper}>
    <Search size={18} color="#64748b" style={styles.searchIcon} />
    <TextInput
      ref={ref}
      placeholderTextColor="#64748b"
      style={[styles.input, style]}
      {...props}
    />
  </View>
))

const CommandList = ({ children, style }: any) => (
  <ScrollView style={[styles.list, style]} keyboardShouldPersistTaps="handled">
    {children}
  </ScrollView>
)

const CommandEmpty = ({ children }: any) => (
  <View style={styles.empty}>
    <Text style={styles.emptyText}>{children || "No results found."}</Text>
  </View>
)

const CommandGroup = ({ children, heading }: any) => (
  <View style={styles.group}>
    {heading && <Text style={styles.groupHeading}>{heading}</Text>}
    {children}
  </View>
)

const CommandItem = ({ children, onSelect, style }: any) => (
  <TouchableOpacity onPress={onSelect} style={[styles.item, style]}>
    <Text style={styles.itemText}>{children}</Text>
  </TouchableOpacity>
)

const CommandSeparator = () => <View style={styles.separator} />

const CommandShortcut = ({ children }: any) => (
  <Text style={styles.shortcut}>{children}</Text>
)

// Simplified for Mobile: Dialog version just wraps the standard command
const CommandDialog = ({ children }: any) => (
  <View style={styles.dialogOverlay}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    overflow: 'hidden',
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    height: 48,
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
  },
  list: {
    maxHeight: 300,
  },
  empty: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  emptyText: {
    color: '#64748b',
    fontSize: 14,
  },
  group: {
    padding: 8,
  },
  groupHeading: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 12,
    fontWeight: '600',
    color: '#64748b',
  },
  item: {
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginHorizontal: -8,
    marginVertical: 4,
  },
  shortcut: {
    marginLeft: 'auto',
    fontSize: 10,
    color: '#64748b',
  },
  dialogOverlay: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
  }
})

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}