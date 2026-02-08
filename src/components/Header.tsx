import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Settings, Moon, Sun } from "lucide-react-native";
import { useTheme } from "./ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logoRow}>
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>J</Text>
          </View>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8b5cf6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    color: 'white',
    fontWeight: 'bold',
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