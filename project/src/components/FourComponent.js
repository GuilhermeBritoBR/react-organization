import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";

//CONTEUDO
export default function FourComponent() {
    return(
        <View style={{alignItems: 'center',  justifyContent: 'center',flex: 0.3, width: '100%', width: '100%', backgroundColor: 'black'}}>
        <Text style={{color: 'white', fontSize: 24,}}>FOOTER</Text>
        
        </View>
    )
}