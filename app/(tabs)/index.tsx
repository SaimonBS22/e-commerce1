import { Image, StyleSheet, View} from 'react-native';
import { Link } from 'expo-router';




export default function HomeScreen() {
  return (
   <View>ecommerce
   <Link href='/+not-found'> ver detalles</Link>
   </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
