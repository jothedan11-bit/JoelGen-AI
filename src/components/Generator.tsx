import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useGenerateImage } from "../hooks/use-images";
import { Sparkles } from "lucide-react-native";

export const Generator = () => {
  const [prompt, setPrompt] = useState("");
  const generateImage = useGenerateImage();

  // FIXED: Removed import.meta.env which crashes Android
  const interstitialId = "ca-app-pub-3940256099942544/1033173712"; 

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    try {
      await generateImage.mutateAsync({ prompt });
      setPrompt("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Describe your vision</Text>
      <TextInput
        style={styles.input}
        placeholder="A futuristic city in the clouds..."
        placeholderTextColor="#94a3b8"
        value={prompt}
        onChangeText={setPrompt}
        multiline
      />
      
      <TouchableOpacity 
        style={[styles.button, !prompt && styles.buttonDisabled]} 
        onPress={handleGenerate}
        disabled={generateImage.isPending || !prompt}
      >
        {generateImage.isPending ? (
          <ActivityIndicator color="white" />
        ) : (
          <View style={styles.buttonContent}>
            <Sparkles size={20} color="white" />
            <Text style={styles.buttonText}>Generate Magic</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginVertical: 20,
  },
  label: { color: '#fff', fontSize: 16, fontWeight: '600', marginBottom: 10 },
  input: {
    backgroundColor: '#0f172a',
    borderRadius: 12,
    padding: 15,
    color: 'white',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#1e293b',
  },
  button: {
    backgroundColor: '#8b5cf6',
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonDisabled: { backgroundColor: '#4c1d95', opacity: 0.5 },
  buttonContent: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});