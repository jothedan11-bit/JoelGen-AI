import * as React from "react"
import { Switch as NativeSwitch, StyleSheet, View } from "react-native"
// Relative path to fix the "@lib/utils" alias error
import { cn } from "../../lib/utils"

const Switch = React.forwardRef<any, any>(({ className, style, checked, onCheckedChange, disabled, ...props }, ref) => {
  return (
    <View style={cn(styles.container, style) as any}>
      <NativeSwitch
        ref={ref}
        value={checked}
        onValueChange={onCheckedChange}
        disabled={disabled}
        // Customizing colors to match your Shadcn theme
        trackColor={{ false: "#e2e8f0", true: "#0f172a" }}
        thumbColor={checked ? "#ffffff" : "#f8fafc"}
        {...props}
      />
    </View>
  )
})

Switch.displayName = "Switch"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
})

export { Switch }