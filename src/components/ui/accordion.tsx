import * as React from "react"
import { View, Text, TouchableOpacity, LayoutAnimation, StyleSheet, Platform, UIManager } from "react-native"
import { ChevronDown } from "lucide-react-native"

// Enable animations on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.root}>{children}</View>
)

const AccordionItem = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.item}>{children}</View>
)

const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    // This makes the opening/closing smooth
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <TouchableOpacity onPress={toggle} activeOpacity={0.7} style={styles.trigger}>
      <Text style={styles.triggerText}>{children}</Text>
      <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
        <ChevronDown size={20} color="#8b5cf6" />
      </View>
    </TouchableOpacity>
  );
}

const AccordionContent = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.content}>
    <Text style={styles.contentText}>{children}</Text>
  </View>
)

const styles = StyleSheet.create({
  root: { 
    width: '100%',
    paddingHorizontal: 4
  },
  item: { 
    borderBottomWidth: 1, 
    borderBottomColor: 'rgba(255,255,255,0.1)',
    marginBottom: 4
  },
  trigger: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', // FIXED: Corrected from 'between'
    paddingVertical: 16 
  },
  triggerText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  content: { 
    paddingBottom: 16,
    paddingTop: 4
  },
  contentText: {
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 20
  }
})

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }