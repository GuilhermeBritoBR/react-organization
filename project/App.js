import { StatusBar } from 'expo-status-bar';
import { styles } from './src/styles/stylesheet';
import { Text, View } from 'react-native';
import FirstComponent from './src/components/FirstComponent';
import SecondComponent from './src/components/SecondComponent';
import TheereComponent from './src/components/TheereComponent';
import FourComponent from './src/components/FourComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Importando o CSS e Compartimentos</Text>
      <StatusBar style="auto" />
      <FirstComponent/>
      <SecondComponent/>
      <TheereComponent/>
      <FourComponent/>
    </View>
  );
}

