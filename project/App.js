import { StatusBar } from 'expo-status-bar';
import { styles } from './src/styles/stylesheet';
import { Text, View } from 'react-native';
//header import
import FirstComponent from './src/components/FirstComponent';
//body import
import SecondComponent from './src/components/SecondComponent';
//content for body import
import TheereComponent from './src/components/TheereComponent';
//footer import
import FourComponent from './src/components/FourComponent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* this is header */}
      <FirstComponent/>
      {/* this is body */}
      <SecondComponent/>
      {/* this is content for body */}
      <TheereComponent/>
      {/* this is footer */}
      <FourComponent/>
    </View>
  );
}

