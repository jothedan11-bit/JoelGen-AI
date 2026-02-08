import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

// Keep the Config type so other files don't break
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

const ChartContainer = ({ config, children, style }: any) => {
  return (
    <ChartContext.Provider value={{ config }}>
      <View style={[styles.container, style]}>
        {/* On Mobile, we render the children directly (usually a Native Chart library) */}
        {children}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>[ Native Chart Area ]</Text>
        </View>
      </View>
    </ChartContext.Provider>
  )
}

const ChartTooltip = ({ children }: any) => <View>{children}</View>

const ChartTooltipContent = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  return (
    <View style={styles.tooltip}>
      {payload.map((item: any, i: number) => (
        <Text key={i} style={styles.tooltipText}>
          {item.name}: {item.value}
        </Text>
      ))}
    </View>
  )
}

const ChartLegend = ({ children }: any) => <View>{children}</View>
const ChartLegendContent = () => null
const ChartStyle = () => null

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 1.5,
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 16,
    justifyContent: 'center',
  },
  placeholder: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#334155',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  placeholderText: {
    color: '#64748b',
    fontSize: 12,
  },
  tooltip: {
    backgroundColor: '#1e293b',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#334155',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
  }
})

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}