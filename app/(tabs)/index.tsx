import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <View style={[styles.container, { backgroundColor: isDark ? '#000' : '#F2F2F7' }]}>
            <View style={styles.content}>
                <Text style={[styles.title, { color: isDark ? '#fff' : '#000' }]}>
                    Shipments App
                </Text>
                <Text style={[styles.subtitle, { color: isDark ? '#8E8E93' : '#8E8E93' }]}>
                    Manage your shipments easily
                </Text>

                <Link href="/new-shipment" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Create New Shipment</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 32,
    },
    button: {
        backgroundColor: '#0055FF',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});
