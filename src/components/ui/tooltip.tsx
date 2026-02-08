import * as React from "react"
import { View, Text } from "react-native"

// We are creating "fake" versions of the tooltip so the rest of your app doesn't break
// but the Android builder can actually understand them.
export const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const Tooltip = ({ children }: { children: React.ReactNode }) => <>{children}</>;
export const TooltipTrigger = ({ children }: { children: React.ReactNode }) => <View>{children}</View>;
export const TooltipContent = ({ children }: { children: React.ReactNode }) => (
  <View style={{ backgroundColor: 'black', padding: 5, borderRadius: 4 }}>
    <Text style={{ color: 'white' }}>{children}</Text>
  </View>
);