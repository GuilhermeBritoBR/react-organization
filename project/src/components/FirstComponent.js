import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";
import { Header } from "react-native/Libraries/NewAppScreen";

//CABEÇALHO
export default function FirstComponent() {
    return(
        <View style={{alignItems: 'center', justifyContent: 'center', display: 'flex',flex:0.3, backgroundColor: 'green', width: "100%"}}>
        <Text style={{color: 'white', fontSize: 24}}>BRITO-HEADER</Text>
        <Text>
            Menu
            Login
            Sobre
            Contato
        </Text>
        
        </View>
    )
}