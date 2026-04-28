import { useState } from "react";
import { Image } from "react-native";
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";
import {useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { useRouter } from "expo-router";
export default function Login( {navigation} : any){
    const router = useRouter();
    const[email,setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[fontsLoaded]=useFonts({
        Montserrat_400Regular
    });
    if (!fontsLoaded) return null;
    const handleLogin = () => {
        if(!email || !password){
            alert("Completa los campos");
            return;
        
        }
        alert("Login exitoso");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a RESound</Text>

            <Image
             source={require("@/assets/images/logo.png")}
             style={styles.logo}
            />
            <TextInput
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            />
            <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            />
            <TouchableOpacity style={styles.button}onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.linkText}>Crear cuenta</Text>
            </TouchableOpacity>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
        alignItems:"center",
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,

    },
    title: {
        fontSize:24,
        marginBottom:20,
        fontFamily:"Montserrat_400Regular",

    },
    input: {
        width: 250,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor:"#ffffff",
        fontFamily:"Montserrat_400Regular",
    },
    button: {
        backgroundColor: "#f285f8",
        padding: 10,
        width:250,
        alignItems: "center",

    },
    buttonText: {
        color:"white",
        fontFamily:"Montserrat_400Regular",
    },
    linkText:{
        marginTop:15,
        color:"#003366",
        textDecorationLine:"underline",
        fontFamily:"Montserrat_400Regular",

    }


})
