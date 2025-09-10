import React, { useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const SERVICES = [
  { id: 'library', icon: '📚', title: 'Library', description: 'Find books, study rooms, and resources.' },
  { id: 'cafeteria', icon: '🍽️', title: 'Cafeteria', description: 'Daily menus and opening hours.' },
  { id: 'it', icon: '💻', title: 'IT Helpdesk', description: 'Tech support and password reset.' },
  { id: 'sports', icon: '🏀', title: 'Sports Center', description: 'Gym schedules and court bookings.' },
  { id: 'health', icon: '🩺', title: 'Health Services', description: 'Appointments and wellness info.' },
  { id: 'transport', icon: '🚌', title: 'Transport', description: 'Shuttle routes and timings.' },
];

export default function ServicesScreen({ navigation }) {
  const data = useMemo(() => SERVICES, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ServiceDetail', { service: item })}>
      <Text style={styles.icon}>{item.icon}</Text>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  icon: {
    fontSize: 28,
    marginRight: 12,
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  separator: {
    height: 12,
  },
});

