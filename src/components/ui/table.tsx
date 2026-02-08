import * as React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { cn } from "../../lib/utils"

const Table = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
    <View ref={ref} style={cn(styles.table, style) as any} {...props} />
  </ScrollView>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.header, style) as any} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.body, style) as any} {...props} />
))
TableBody.displayName = "TableBody"

const TableRow = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.row, style) as any} {...props} />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.head, style) as any}>
    <Text style={styles.headText}>{props.children}</Text>
  </View>
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.cell, style) as any}>
    <Text style={styles.cellText}>{props.children}</Text>
  </View>
))
TableCell.displayName = "TableCell"

const TableFooter = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.footer, style) as any} {...props} />
))
TableFooter.displayName = "TableFooter"

const TableCaption = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View ref={ref} style={cn(styles.caption, style) as any}>
    <Text style={styles.captionText}>{props.children}</Text>
  </View>
))
TableCaption.displayName = "TableCaption"

const styles = StyleSheet.create({
  table: {
    width: '100%',
    minWidth: 600, // Forces scroll if the screen is narrower than this
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  body: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    alignItems: 'center',
  },
  head: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  headText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    textAlign: 'left',
  },
  cell: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
    color: '#0f172a',
  },
  footer: {
    borderTopWidth: 1,
    backgroundColor: '#f8fafc',
    flexDirection: 'row',
  },
  caption: {
    padding: 16,
  },
  captionText: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
})

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}