import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Settings, Moon, Sun } from "lucide-react-native";
import { useTheme } from "./ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logoRow}>
          {/* --- LOGO IMAGE FIXED FOR APK --- */}
          <Image 
            source={require('../assets/icon.png')} // Confirmed: icon.png exists in your assets folder
            style={styles.logoImage}
            resizeMode="contain"
          />
          <Text style={styles.brandText}>JoelGen AI</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity 
            onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={styles.button}
          >
            {theme === "dark" ? (
              <Sun size={20} color="#fbbf24" />
            ) : (
              <Moon size={20} color="#6366f1" />
            )}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <Settings size={20} color="#94a3b8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(0,0,0,0.8)', 
    zIndex: 50,
    paddingTop: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: '100%',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 35, 
    height: 35,
    borderRadius: 8,
  },
  brandText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    padding: 8,
  }
});