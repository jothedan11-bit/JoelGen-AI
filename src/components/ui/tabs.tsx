import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
// Relative path to kill the "@" alias error
import { cn } from "../../lib/utils"

const TabsContext = React.createContext<{
  value?: string
  onValueChange?: (val: string) => void
}>({})

const Tabs = ({ defaultValue, value, onValueChange, children, style }: any) => {
  const [selectedValue, setSelectedValue] = React.useState(value || defaultValue)

  const handleValueChange = React.useCallback((val: string) => {
    setSelectedValue(val)
    onValueChange?.(val)
  }, [onValueChange])

  return (
    <TabsContext.Provider value={{ value: value || selectedValue, onValueChange: handleValueChange }}>
      <View style={cn(styles.root, style) as any}>
        {children}
      </View>
    </TabsContext.Provider>
  )
}

const TabsList = React.forwardRef<View, any>(({ className, style, ...props }, ref) => (
  <View
    ref={ref}
    style={cn(styles.list, style) as any}
    {...props}
  />
))

const TabsTrigger = React.forwardRef<View, any>(({ value, style, children, ...props }, ref) => {
  const context = React.useContext(TabsContext)
  const isActive = context.value === value

  return (
    <TouchableOpacity
      ref={ref as any}
      onPress={() => context.onValueChange?.(value)}
      style={cn(styles.trigger, isActive && styles.triggerActive, style) as any}
      {...props}
    >
      <Text style={cn(styles.triggerText, isActive && styles.triggerTextActive) as any}>
        {children}
      </Text>
    </TouchableOpacity>
  )
})

const TabsContent = React.forwardRef<View, any>(({ value, style, ...props }, ref) => {
  const context = React.useContext(TabsContext)
  if (context.value !== value) return null

  return (
    <View
      ref={ref}
      style={cn(styles.content, style) as any}
      {...props}
    />
  )
})

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#f1f5f9', // bg-muted
    padding: 4,
  },
  trigger: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  triggerActive: {
    backgroundColor: '#ffffff', // bg-background
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  triggerText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b', // text-muted-foreground
  },
  triggerTextActive: {
    color: '#0f172a', // text-foreground
  },
  content: {
    marginTop: 8,
  },
})

export { Tabs, TabsList, TabsTrigger, TabsContent }