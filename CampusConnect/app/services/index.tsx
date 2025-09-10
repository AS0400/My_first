import { Link } from 'expo-router';
import { FlatList, View, Text, StyleSheet, Pressable } from 'react-native';
import { services } from '@/constants/services';

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Campus Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link href={`/services/${item.id}`} asChild>
            <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
              <Text style={styles.icon}>{item.icon}</Text>
              <View style={styles.cardBody}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desc}>{item.description}</Text>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fbff',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0b3a64',
    marginBottom: 12,
  },
  separator: {
    height: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0ecff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
  },
  cardPressed: { opacity: 0.85 },
  icon: { fontSize: 26, marginRight: 12 },
  cardBody: { flex: 1 },
  title: { fontSize: 16, fontWeight: '700', color: '#12355b' },
  desc: { color: '#315a85', marginTop: 4 },
});

