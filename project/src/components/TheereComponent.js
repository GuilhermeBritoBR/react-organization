import { Text, View} from "react-native";
import { styles } from "../styles/stylesheet";

//RODAPÉ
export default function TheereComponent() {
    return(
        <View style={{display: 'flex',flex:1, alignItems: "center", }}>
        <Text style={{color: 'orange', fontSize: 12}}>Tecnologia (do grego τέχνη — "técnica, arte, ofício" e -λογία — "estudo") é o conjunto de técnicas, habilidades, métodos e processos usados na produção de bens ou serviços, ou na realização de objetivos, como em investigações científicas. Tecnologia pode ser o conhecimento de técnicas, processos e similares.</Text>
        <Text></Text>
        
        </View>
    )
}