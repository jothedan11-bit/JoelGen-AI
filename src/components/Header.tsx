import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; // Added Image here
import { Settings, Moon, Sun } from "lucide-react-native";
import { useTheme } from "./ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logoRow}>
          {/* --- LOGO IMAGE START --- */}
          <Image 
            source={require('../assets/logo.png')} // Make sure it matches your filename (logo.png or Logo.png)
            style={styles.logoImage}
            resizeMode="contain"
          />
          {/* --- LOGO IMAGE END --- */}
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
    backgroundColor: 'rgba(0,0,0,0.8)', // Made a bit darker for better visibility
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
  // New style for your logo
  logoImage: {
    width: 35, 
    height: 35,
    borderRadius: 8, // Optional: gives it slightly rounded corners
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