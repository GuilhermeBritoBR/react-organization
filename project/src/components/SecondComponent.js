import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";

//CORPO
export default function SecondComponent() {
    return(
        <View style={{display: 'flex', justifyContent: 'center',flex:0, alignItems: "center", width: '100%', backgroundColor: 'orange'}}>
        <Text style={{color: 'red', fontSize: 24, }}>
        Body        
        </Text>
        <Text style={{fontSize:16,}}>
            A tecnologia é demais!
        </Text>
        </View>
    )
}