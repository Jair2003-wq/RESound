import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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
             <Image
             source={require("@/assets/images/logo.png")}
             style={styles.logo}
            />
            <Text style={styles.title}>Bienvenido a RESound</Text>
            <TextInput
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
            style={styles.input1}
            />
            <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input2}
            />
            <TouchableOpacity 
            style={styles.button} 
            onPress={()=>{router.push("/preferences"); handleLogin();}}>
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
        position: 'absolute',
        top: 120,
        alignSelf:'center'

    },
    title: {
        fontSize:24,
        marginBottom:20,
        fontFamily:"Montserrat_400Regular",
        position:'absolute',
        top:250,
        alignSelf:'center',


    },
    input1: {
        width: 250,
        height: 40,
        borderWidth: 1,
        position:'absolute',
        top:350,

        paddingHorizontal: 10,
        backgroundColor:"#ffffff",
        fontFamily:"Montserrat_400Regular",
    },
     input2: {
        width: 250,
        height: 40,
        borderWidth: 1,
        position:'absolute',
        top:420,
        paddingHorizontal: 10,
        backgroundColor:"#ffffff",
        fontFamily:"Montserrat_400Regular",
    },
    button: {
        backgroundColor: "#f285f8",
        padding: 10,
        width:250,
        position:'absolute',
        top:520,

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
        position:'absolute',
        top:200,
        alignSelf:'center',


    }


})
