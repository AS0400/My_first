import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ServiceDetailScreen({ route }) {
  const { service } = route.params || {};

  if (!service) {
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Service not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{service.icon}</Text>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.description}>{service.description}</Text>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Details</Text>
        <Text style={styles.panelText}>
          Here you can place more comprehensive information about {service.title}, including opening hours,
          location, contact info, and links. This is a prototype screen.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    fontSize: 56,
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
    color: '#111827',
  },
  description: {
    fontSize: 16,
    color: '#374151',
    marginTop: 6,
    textAlign: 'center',
  },
  panel: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },
  panelText: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});

