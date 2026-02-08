import * as React from "react"
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle, View } from "react-native"

export interface ButtonProps {
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
}

const Button = React.forwardRef<View, ButtonProps>(
  ({ children, variant = "default", size = "default", loading, disabled, style, textStyle, ...props }, ref) => {
    
    // Select Background Style
    const getVariantStyle = () => {
      switch (variant) {
        case 'destructive': return styles.destructive;
        case 'outline': return styles.outline;
        case 'secondary': return styles.secondary;
        case 'ghost': return styles.ghost;
        case 'link': return styles.link;
        default: return styles.default;
      }
    };

    // Select Size Style
    const getSizeStyle = () => {
      switch (size) {
        case 'sm': return styles.sm;
        case 'lg': return styles.lg;
        case 'icon': return styles.icon;
        default: return styles.md;
      }
    };

    const textVariantColor = (variant === 'outline' || variant === 'ghost' || variant === 'link') 
      ? { color: '#8b5cf6' } 
      : { color: '#ffffff' };

    return (
      <TouchableOpacity
        onPress={props.onPress}
        disabled={disabled || loading}
        activeOpacity={0.7}
        style={[
          styles.base,
          getVariantStyle(),
          getSizeStyle(),
          disabled && styles.disabled,
          style as ViewStyle
        ]}
      >
        <View ref={ref} style={styles.innerWrapper}>
          {loading ? (
            <ActivityIndicator color={variant === 'outline' ? "#8b5cf6" : "#ffffff"} />
          ) : (
            <Text style={[styles.text, textVariantColor, textStyle]}>
              {children}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  default: { backgroundColor: '#8b5cf6' },
  destructive: { backgroundColor: '#ef4444' },
  outline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#8b5cf6' },
  secondary: { backgroundColor: '#1e293b' },
  ghost: { backgroundColor: 'transparent' },
  link: { backgroundColor: 'transparent' },
  disabled: { opacity: 0.5 },
  md: { height: 44, paddingHorizontal: 16 },
  sm: { height: 36, paddingHorizontal: 12 },
  lg: { height: 52, paddingHorizontal: 24 },
  icon: { height: 40, width: 40 },
});

export { Button };