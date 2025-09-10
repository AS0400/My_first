import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

type Announcement = {
  id: number;
  title: string;
};

export default function AnnouncementsScreen() {
  const [data, setData] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!cancelled) {
          setData(res.data as Announcement[]);
        }
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? 'Failed to fetch');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Latest Announcements</Text>
      {loading && (
        <View style={styles.center}> 
          <ActivityIndicator />
          <Text style={{ marginTop: 8 }}>Loading…</Text>
        </View>
      )}
      {error && (
        <View style={styles.center}> 
          <Text style={{ color: '#b00020' }}>Error: {error}</Text>
        </View>
      )}
      {!loading && !error && (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => (
            <View style={styles.item}> 
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7fbff', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', color: '#0b3a64', marginBottom: 12 },
  center: { alignItems: 'center', justifyContent: 'center' },
  separator: { height: 10 },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0ecff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: { fontSize: 22, color: '#1e88e5', marginRight: 8 },
  title: { flex: 1, color: '#12355b', fontWeight: '600' },
});

