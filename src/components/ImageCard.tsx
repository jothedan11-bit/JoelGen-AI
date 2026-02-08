import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Download, Maximize2 } from "lucide-react-native";

export const ImageCard = ({ image, index }: { image: any, index: number }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: image.url }} 
        style={styles.image} 
        resizeMode="cover"
      />
      
      <View style={styles.overlay}>
        <Text style={styles.prompt} numberOfLines={2}>{image.prompt}</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)}>
            <Maximize2 size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Download size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Simple Fullscreen Preview */}
      <Modal visible={modalVisible} transparent={true}>
        <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <Image source={{ uri: image.url }} style={styles.fullImage} resizeMode="contain" />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1f2937',
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  prompt: {
    color: 'white',
    fontSize: 12,
    marginBottom: 8,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  iconButton: {
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '80%',
  }
});