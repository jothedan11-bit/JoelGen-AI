import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AlertCircle } from "lucide-react-native";

// We are simplifying the "Card" structure so it works on Android instantly
export default function NotFound() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <AlertCircle size={32} color="red" />
          <Text style={styles.title}>404 Page Not Found</Text>
        </View>
        <Text style={styles.message}>
          Did you forget to add the page to the router?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 24,
    // Android Shadow
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginLeft: 8,
  },
  message: {
    fontSize: 14,
    color: '#4B5563',
  },
});