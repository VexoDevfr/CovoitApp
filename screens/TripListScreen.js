import { FlatList } from "react-native";
import { mockTrips } from "../data/mockTrips";
import { Pressable } from "react-native";
import TripCard from './components/TripCard'; 
import { StyleSheet, Text, View } from 'react-native';

export default function TripListScreen() {
    return (
        <FlatList
            data={mockTrips}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() =>
                        console.log(
                            "Trajet sélectionné : " + item.departure + " → " + item.arrival
                        )
                    }
                    style={({ pressed }) => [
                        styles.card,
                        pressed && styles.cardPressed,
                    ]}
                >
                    <TripCard trip={item} />
                </Pressable>
            )}
            contentContainerStyle={{ padding: 16, gap: 12 }}
        />
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,

    },
    cardPressed: {
        opacity: 0.6,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    route: {
        fontSize: 18,
        fontWeight: 600,
        color: "#161B33",
        marginTop: 8,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#3ED9C4"
    }
});