import * as React from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native"

// Simplified for Native
const AlertDialog = ({ children, open, onOpenChange }: any) => {
  return (
    <View>{React.Children.map(children, child => 
      React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { open, onOpenChange }) : child
    )}</View>
  )
}

const AlertDialogTrigger = ({ asChild, children, onOpenChange }: any) => (
  <TouchableOpacity onPress={() => onOpenChange?.(true)}>{children}</TouchableOpacity>
)

const AlertDialogContent = ({ children, open, onOpenChange }: any) => (
  <Modal
    transparent
    visible={open}
    animationType="fade"
    onRequestClose={() => onOpenChange?.(false)}
  >
    <Pressable style={styles.overlay} onPress={() => onOpenChange?.(false)}>
      <View style={styles.content} onStartShouldSetResponder={() => true}>
        {children}
      </View>
    </Pressable>
  </Modal>
)

const AlertDialogHeader = ({ children }: any) => <View style={styles.header}>{children}</View>
const AlertDialogFooter = ({ children }: any) => <View style={styles.footer}>{children}</View>

const AlertDialogTitle = ({ children }: any) => <Text style={styles.title}>{children}</Text>
const AlertDialogDescription = ({ children }: any) => <Text style={styles.description}>{children}</Text>

const AlertDialogAction = ({ children, onPress }: any) => (
  <TouchableOpacity style={[styles.button, styles.actionButton]} onPress={onPress}>
    <Text style={styles.actionText}>{children}</Text>
  </TouchableOpacity>
)

const AlertDialogCancel = ({ children, onPress }: any) => (
  <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onPress}>
    <Text style={styles.cancelText}>{children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  content: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    borderWidth: 1,
    borderColor: '#334155'
  },
  header: { marginBottom: 16 },
  footer: { marginTop: 24, gap: 10 },
  title: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  description: { color: '#94a3b8', fontSize: 16, lineHeight: 22 },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: { backgroundColor: '#8b5cf6' },
  cancelButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#334155' },
  actionText: { color: '#fff', fontWeight: '600' },
  cancelText: { color: '#fff' }
})

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}