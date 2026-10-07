import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TripListScreen from './screens/TripListScreen'; 

export default function App() {
  return (
  <View style={styles.container}> 
    <Text>CovoitApp</Text>
    <TripListScreen/>
  </View>);
} 

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#070808", 
  }, 
  title: { fontSize: 32, fontWeight: "bold", color: "#FFFFFF" }, 
  subtitle: { fontSize: 16, color: "#AEB4D6", marginTop: 8 }, 
});
