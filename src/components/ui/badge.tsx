import * as React from "react"
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native"

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  style?: ViewStyle;
}

function Badge({ children, variant = 'default', style }: BadgeProps) {
  // Logic to select styles safely
  const containerStyle = [
    styles.base,
    variant === 'secondary' ? styles.secondary :
    variant === 'destructive' ? styles.destructive :
    variant === 'outline' ? styles.outline : styles.default,
    style
  ];

  const textStyle = [
    styles.textBase,
    variant === 'outline' ? styles.textOutline : styles.textWhite
  ];

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 6,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  default: {
    backgroundColor: '#8b5cf6',
    borderColor: 'transparent',
  },
  secondary: {
    backgroundColor: '#1e293b',
    borderColor: 'transparent',
  },
  destructive: {
    backgroundColor: '#ef4444',
    borderColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,0.2)',
  },
  textBase: {
    fontSize: 12,
    fontWeight: '600',
  },
  textWhite: {
    color: '#ffffff',
  },
  textOutline: {
    color: '#ffffff',
  }
});

export { Badge };