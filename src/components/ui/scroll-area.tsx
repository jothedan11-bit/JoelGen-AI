import * as React from "react"
import { ScrollView, StyleSheet, View } from "react-native"

const ScrollArea = React.forwardRef<ScrollView, any>(
  ({ className, children, style, horizontal, ...props }, ref) => {
    return (
      <ScrollView
        ref={ref}
        style={[styles.root, style]}
        contentContainerStyle={styles.contentContainer}
        horizontal={horizontal}
        showsVerticalScrollIndicator={!horizontal}
        showsHorizontalScrollIndicator={horizontal}
        {...props}
      >
        {children}
      </ScrollView>
    )
  }
)
ScrollArea.displayName = "ScrollArea"

const ScrollBar = () => {
  // Native ScrollView handles scrollbars automatically. 
  // We keep this export so other files don't break.
  return null
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
  },
})

export { ScrollArea, ScrollBar }