import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";
import { Header } from "react-native/Libraries/NewAppScreen";

//CABEÇALHO
export default function FirstComponent() {
    return(
        <View style={{display: 'flex',flex:1, }}>
        <Text style={{color: 'blue', fontSize: 24}}>BRITO-HEADER</Text>
        <Text>
            Menu
            Login
            Sobre
            Contato
        </Text>
        
        </View>
    )
}