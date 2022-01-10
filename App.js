import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Button} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ImageBackground source={require('./assets/loading.png')} style={styles.splash}>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello</Text>

      <TouchableOpacity style={styles.sign} onPress={() => console.log("LOGGED")}>
      <Text style={styles.sign_title}>Sign Up</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 50
  },
  sign: {
    alignItems: 'center',
    width: "100%",
    height: 65,
    width: 354,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
    justifyContent: 'center'

  },
  sign_title: {
    color: "white",
    fontSize: 20
  }

});
