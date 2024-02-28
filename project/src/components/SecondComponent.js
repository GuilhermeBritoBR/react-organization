import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";

//CORPO
export default function SecondComponent() {
    return(
        <View style={{display: 'flex',flex:0, alignItems: "center"}}>
        <Text style={{color: 'red', fontSize: 24, }}>
        Body        
        </Text>
        <Text style={{fontSize:16,}}>
            A tecnologia é demais!
        </Text>
        </View>
    )
}