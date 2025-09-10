import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/icon.png')}
        style={styles.logo}
        contentFit="contain"
      />
      <Text style={styles.title}>CampusConnect</Text>
      <Text style={styles.subtitle}>Welcome! Find services and announcements with ease.</Text>

      <Link href="/services" asChild>
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Explore Services</Text>
        </Pressable>
      </Link>

      <Link href="/announcements" asChild>
        <Pressable style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}>
          <Text style={styles.secondaryText}>View Announcements</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f9ff',
  },
  logo: {
    width: 96,
    height: 96,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#12355b',
  },
  subtitle: {
    textAlign: 'center',
    color: '#315a85',
    marginTop: 8,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#1e88e5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
  secondaryButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    borderColor: '#1e88e5',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  secondaryText: {
    color: '#1e88e5',
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.85,
  },
});

