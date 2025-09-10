import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { getServiceById } from '@/constants/services';

export default function ServiceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const service = typeof id === 'string' ? getServiceById(id) : undefined;

  if (!service) {
    return (
      <View style={styles.container}> 
        <Text style={styles.title}>Service not found</Text>
        <Text style={styles.desc}>The requested service does not exist.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{service.icon}</Text>
      <Text style={styles.title}>{service.title}</Text>
      <Text style={styles.desc}>{service.description}</Text>
      <View style={styles.card}> 
        <Text style={styles.details}>{service.details}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
    padding: 16,
  },
  icon: { fontSize: 48, marginBottom: 8 },
  title: { fontSize: 24, fontWeight: '800', color: '#12355b' },
  desc: { color: '#315a85', marginTop: 6, marginBottom: 14 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e0ecff',
  },
  details: { fontSize: 16, color: '#163a5f', lineHeight: 22 },
});

