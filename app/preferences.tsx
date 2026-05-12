import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainMenu from "./(tabs)/main_menu";
import { useRouter} from "expo-router";
export default function Preferences (){
    const[fontsLoaded]=useFonts({
        Montserrat_400Regular
    });
    const router=useRouter();
    const[visible,setVisible]=useState(false);


    return(
    <View style={styles.container}>
        <Text style={styles.title}>Selecciona los géneros que más te gusten :)</Text>

        <TouchableOpacity style={[styles.button,styles.buttonGen1]}
        onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonGen2]}
        onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>Pop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonGen3]}
        onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>Rap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button,styles.buttonGen4]}
        onPress={() => setVisible(true)}>
            <Text style={styles.buttonText}>Cumbia</Text>
        </TouchableOpacity>
         <TouchableOpacity style={[styles.button,styles.buttonNext]} onPress={() => router.push("/main_menu")}>
            <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <Modal 
        transparent={true}
        animationType="fade"
        visible={visible}
        >
            <BlurView intensity={90} style={styles.overlay}>
                <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalText}>¡Que buen gusto tienes!</Text>
                </View>
                <TouchableOpacity style={[styles.button,styles.buttonOver]} onPress={() => setVisible(false)}> 
                    <Text style={styles.buttonText}>Continuar</Text>
                </TouchableOpacity>
            </View>
            </BlurView>
        </Modal>

    </View>

    )
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    title: {
        marginLeft:30,
        marginRight:30,
        fontSize:24,
        marginBottom:20,
        fontFamily:"Montserrat_400Regular",
    },
     button: {
        padding: 10,
        width:250,
        alignItems: "center",
        marginTop:10,
        marginBottom:10,
    },
      buttonGen1: {
        backgroundColor:"#003366"
    },
      buttonGen2: {
        backgroundColor:"#D5346f"
    },
      buttonGen3: {
        backgroundColor:"#D675E1"
    },
      buttonGen4: {
        backgroundColor:"#496dfc"
    },
      buttonNext: {
        backgroundColor:"#000000",
        width:200,
        height:40,
        marginTop:30,
    },
    buttonOver:{
        backgroundColor:"#003366",
        width:120,
        height:40,

    },
    buttonText: {
        color:"white",
        fontFamily:"Montserrat_400Regular",
    },
    overlay:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    modalBox:{
        padding:20,
        borderRadius:10,
        alignItems:"center",
        width:250,
    },
    modalText:{
        fontFamily:"Montserrat_400Regular"
    },
    


})



