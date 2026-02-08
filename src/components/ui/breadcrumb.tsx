import * as React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { ChevronRight, MoreHorizontal } from "lucide-react-native"

const Breadcrumb = ({ children, style }: any) => (
  <View style={[styles.container, style]}>{children}</View>
)

const BreadcrumbList = ({ children, style }: any) => (
  <View style={[styles.list, style]}>{children}</View>
)

const BreadcrumbItem = ({ children, style }: any) => (
  <View style={[styles.item, style]}>{children}</View>
)

const BreadcrumbLink = ({ children, onPress, style }: any) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[styles.link, style]}>{children}</Text>
  </TouchableOpacity>
)

const BreadcrumbPage = ({ children, style }: any) => (
  <Text style={[styles.page, style]} numberOfLines={1}>
    {children}
  </Text>
)

const BreadcrumbSeparator = ({ children }: any) => (
  <View style={styles.separator}>
    {children ?? <ChevronRight size={14} color="#64748b" />}
  </View>
)

const BreadcrumbEllipsis = () => (
  <View style={styles.ellipsis}>
    <MoreHorizontal size={16} color="#64748b" />
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    color: '#94a3b8', // Slate 400
  },
  page: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#ffffff',
  },
  separator: {
    marginHorizontal: 8,
  },
  ellipsis: {
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}