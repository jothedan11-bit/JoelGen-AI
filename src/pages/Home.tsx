import React from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Header } from "../components/Header";
import { Generator } from "../components/Generator";
import { ImageCard } from "../components/ImageCard";
import { useImages } from "../hooks/use-images";
import { Loader2 } from "lucide-react-native";

export default function Home() {
  const { data: images, isLoading } = useImages();

  return (
    <ScrollView style={styles.container}>
      <Header />
      
      <View style={styles.main}>
        {/* Header Section */}
        <View style={styles.heroSection}>
          <Text style={styles.title}>
            Turn text into {"\n"}
            <Text style={{ color: '#8b5cf6' }}>visual reality</Text>
          </Text>
          <Text style={styles.subtitle}>
            Generate stunning, high-quality images in seconds with our advanced AI model. 
            Just describe what you see in your mind.
          </Text>
        </View>

        <Generator />

        {/* Gallery Section */}
        <View style={styles.galleryHeader}>
          <Text style={styles.galleryTitle}>Gallery</Text>
          <View style={styles.line} />
        </View>

        {isLoading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color="#8b5cf6" />
          </View>
        ) : !images || images.length === 0 ? (
          <View style={styles.center}>
            <Text style={styles.muted}>No images generated yet. Be the first to create magic!</Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {images.map((image, i) => (
              <ImageCard key={image.id} image={image} index={i} />
            ))}
          </View>
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.logoText}>
          <Text style={{ color: '#FFFFFF' }}>J</Text>
          <Text style={{ color: '#FF8C00' }}>O</Text>
          <Text style={{ color: '#00FFFF' }}>E</Text>
          <Text style={{ color: '#ADFF2F' }}>L</Text>
          <Text style={{ color: '#FFD700' }}>G</Text>
          <Text style={{ color: '#FF69B4' }}>E</Text>
          <Text style={{ color: '#FFFF00' }}>N</Text>
          <Text style={{ color: '#FFFFFF' }}> AI</Text>
        </Text>
        <Text style={styles.copyright}>
          © {new Date().getFullYear()} JoelGen AI. All rights reserved
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://docs.google.com/document/d/e/2PACX-1vTDoZmHyl4Pd1OGCDZaIDNM1ycPJIOrXc6Wl7loQiNov2ri8-HBSDWyMflUCh58qOWV1jToXnkb5kr6/pub')}>
          <Text style={styles.link}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  main: { paddingHorizontal: 20, paddingTop: 80, paddingBottom: 40 },
  heroSection: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 40, fontWeight: 'bold', color: '#fff', textAlign: 'center', lineHeight: 48 },
  subtitle: { fontSize: 16, color: '#94a3b8', textAlign: 'center', marginTop: 20, maxWidth: 300 },
  galleryHeader: { flexDirection: 'row', alignItems: 'center', marginVertical: 30 },
  galleryTitle: { fontSize: 24, fontWeight: 'bold', color: '#8b5cf6' },
  line: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)', flex: 1, marginLeft: 15 },
  center: { paddingVertical: 40, alignItems: 'center' },
  muted: { color: '#64748b', textAlign: 'center' },
  grid: { flexDirection: 'column', gap: 20 },
  footer: { borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.05)', padding: 40, alignItems: 'center' },
  logoText: { fontSize: 32, fontWeight: '900', letterSpacing: -1 },
  copyright: { color: '#64748b', fontSize: 10, marginTop: 10 },
  link: { color: '#a78bfa', fontSize: 12, marginTop: 5, textDecorationLine: 'underline' }
});