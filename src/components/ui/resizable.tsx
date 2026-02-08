import * as React from "react"
import { View, StyleSheet } from "react-native"
import { GripVertical } from "lucide-react-native"

const ResizablePanelGroup = ({
  children,
  direction = "horizontal",
  style,
  ...props
}: any) => (
  <View
    style={[
      styles.group,
      direction === "vertical" ? styles.vertical : styles.horizontal,
      style,
    ]}
    {...props}
  >
    {children}
  </View>
)

const ResizablePanel = ({ children, style, ...props }: any) => (
  <View style={[styles.panel, style]} {...props}>
    {children}
  </View>
)

const ResizableHandle = ({ withHandle, style, ...props }: any) => {
  // On mobile, we render the handle visually but disable the "drag" 
  // to prevent gesture conflicts during the Phase 1 build.
  if (!withHandle) return <View style={[styles.handleHidden, style]} />;

  return (
    <View style={[styles.handleContainer, style]} {...props}>
      <View style={styles.handleVisual}>
        <GripVertical size={10} color="#64748b" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  panel: {
    flex: 1, // Default to equal distribution on mobile
  },
  handleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e2e8f0', // border color
    width: 2,
    zIndex: 10,
  },
  handleVisual: {
    height: 16,
    width: 12,
    backgroundColor: '#f1f5f9',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleHidden: {
    width: 1,
    backgroundColor: '#e2e8f0',
  }
})

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }