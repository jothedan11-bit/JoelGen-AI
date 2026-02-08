import * as React from "react"
import { View, Text, StyleSheet } from "react-native"

// We define this manually so Line 4 never errors again
export type CalendarProps = {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  mode?: "single" | "range";
};

const Calendar = ({ selected }: CalendarProps) => (
  <View style={styles.box}>
    <Text style={styles.text}>
      {selected ? selected.toDateString() : "Calendar Placeholder"}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  box: { 
    padding: 20, 
    backgroundColor: '#1e293b', 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#334155'
  },
  text: { 
    color: '#94a3b8', 
    textAlign: 'center',
    fontSize: 14 
  }
})

export { Calendar }