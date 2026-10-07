import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function TripCard({ trip }) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.route}>
                    {trip.departure} → {trip.arrival}
                </Text>
                <Text style={styles.price}>{trip.price} €</Text>
            </View>
            <Text>{trip.date}, à {trip.time}</Text>
            <Text>{trip.seatsAvailable} places disponibles</Text>
            <Text>{trip.price}€</Text>
            <Text>{trip.driver.name}</Text>
        </View>
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