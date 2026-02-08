import * as React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react-native"

const Pagination = ({ style, ...props }: any) => (
  <View style={[styles.container, style]} {...props} />
)

const PaginationContent = ({ style, ...props }: any) => (
  <View style={[styles.content, style]} {...props} />
)

const PaginationItem = ({ style, ...props }: any) => (
  <View style={style} {...props} />
)

const PaginationLink = ({
  style,
  isActive,
  children,
  onPress,
  ...props
}: any) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.link,
      isActive ? styles.linkActive : styles.linkGhost,
      style
    ]}
    {...props}
  >
    {typeof children === "string" ? (
      <Text style={[styles.linkText, isActive && styles.linkTextActive]}>{children}</Text>
    ) : (
      children
    )}
  </TouchableOpacity>
)

const PaginationPrevious = ({ style, ...props }: any) => (
  <PaginationLink
    style={[styles.navButton, style]}
    {...props}
  >
    <ChevronLeft size={18} color="#0f172a" />
    <Text style={styles.navText}>Prev</Text>
  </PaginationLink>
)

const PaginationNext = ({ style, ...props }: any) => (
  <PaginationLink
    style={[styles.navButton, style]}
    {...props}
  >
    <Text style={styles.navText}>Next</Text>
    <ChevronRight size={18} color="#0f172a" />
  </PaginationLink>
)

const PaginationEllipsis = ({ style, ...props }: any) => (
  <View style={[styles.ellipsis, style]} {...props}>
    <MoreHorizontal size={18} color="#64748b" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  link: {
    height: 36,
    minWidth: 36,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  linkActive: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    backgroundColor: 'transparent',
  },
  linkGhost: {
    backgroundColor: 'transparent',
  },
  linkText: {
    fontSize: 14,
    color: '#0f172a',
  },
  linkTextActive: {
    fontWeight: '600',
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
  },
  navText: {
    fontSize: 14,
    color: '#0f172a',
  },
  ellipsis: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}