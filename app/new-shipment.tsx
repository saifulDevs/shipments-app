import { NewShipmentScreen } from '@/components/screens/NewShipmentScreen';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export default function NewShipmentPage() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true, // User's component has a header bar, maybe hide native?
                    // The user's component has <HeaderBar title="New shipment" />
                    // So we should probably hide the native header.
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
            <ScrollView
                style={[styles.container, { backgroundColor: isDark ? '#000' : '#fff' }]}
                contentContainerStyle={{ padding: 20, paddingTop: 60, paddingBottom: 40 }}
            >
                <NewShipmentScreen />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
