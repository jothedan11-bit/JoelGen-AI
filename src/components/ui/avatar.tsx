import * as React from "react"
import { View, Image, Text, StyleSheet } from "react-native"

const Avatar = React.forwardRef<View, any>(({ style, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.root, style]}
    {...props}
  />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef<Image, any>(({ style, src, ...props }, ref) => (
  <Image
    ref={ref}
    source={typeof src === 'string' ? { uri: src } : src}
    style={[styles.image, style]}
    {...props}
  />
))
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef<View, any>(({ style, children, ...props }, ref) => (
  <View
    ref={ref}
    style={[styles.fallback, style]}
    {...props}
  >
    <Text style={styles.fallbackText}>{children}</Text>
  </View>
))
AvatarFallback.displayName = "AvatarFallback"

const styles = StyleSheet.create({
  root: {
    position: 'relative', // FIXED: Corrected position logic
    flexDirection: 'row',
    height: 40,
    width: 40,
    borderRadius: 20, 
    overflow: 'hidden',
    backgroundColor: '#1e293b', 
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  image: {
    height: '100%',
    width: '100%',
    aspectRatio: 1,
  },
  fallback: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334155',
  },
  fallbackText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  }
})

export { Avatar, AvatarImage, AvatarFallback }