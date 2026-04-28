import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { useState } from "react";
import { ActivityIndicator, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function Register( {navigation} : any){
    const[nombre,setNombre]=useState("");
    const[apellidos,setApellidos]=useState("");
    const[email,setEmail]=useState("");
    const[password, setPassword]=useState("");
    const[passwordConfirm,setPasswordConfirm]=useState("");
    const[fontsLoaded]=useFonts({
        Montserrat_400Regular
    });
    const[codigo,setCodigo]=useState("");
    const[mostratModal,setMostrarModal]=useState(false);
    const[loading,setLoading]=useState(false);
    if (!fontsLoaded) return null;
    const handleLogin = () => {
        if(!email || !password){
            alert("Completa los campos");
            return;
        
        }
        setMostrarModal(true);
    };
    const verificarContraseña = () =>{
        if(!password || passwordConfirm){
            alert("Tu contraseña no coincide")
            return;
        }
    };
       const confirmarCodigo = () => {
            if(!codigo) {
                alert("Ingresar el código que se envió a tu correo");
                return;
            }setLoading(true);

            setTimeout(() =>{
                setLoading(false);
                alert("Cuenta creada exitosamente")
                setMostrarModal(false);
            },2000);
    };


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Ingresa los datos para crear la cuenta</Text>

            <Image
             source={require("@/assets/images/logo.png")}
             style={styles.logo}
            />
            <TextInput
            placeholder="Nombre"
            value={nombre}
            onChangeText={setNombre}
            style={styles.input}
            />
             <TextInput
            placeholder="Apellidos"
            value={apellidos}
            onChangeText={setApellidos}
            style={styles.input}
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
            <TextInput
            placeholder="Confirmar constraseña"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry
            style={styles.input}
            />
            <TouchableOpacity style={styles.button}onPress={()=>{handleLogin();verificarContraseña();}}>
                <Text style={styles.buttonText}>Crear usuario</Text>
            </TouchableOpacity>

            <Modal visible={mostratModal} transparent animationType="fade">
                <View style={styles.overlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>
                            Ingresa el código de confirmación
                        </Text>
                        <TextInput
                        placeholder="Código"
                        value={codigo}
                        onChangeText={setCodigo}
                        style={styles.input}
                        ></TextInput>

                        <TouchableOpacity style={styles.button} onPress={confirmarCodigo } disabled={loading}>
                            {loading ?(
                                <ActivityIndicator color="blue"/>
                            ): (
                                <Text style={styles.buttonText}>Confirmar</Text>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=> setMostrarModal(false)}>
                            <Text style={{marginTop:10,color:"red"}}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        marginBottom: 30,

    },
    title: {
        fontSize:20,
        marginBottom:18,
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
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalBox: {
        width: 300,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },

    modalTitle: {
        fontSize: 18,
        marginBottom: 15,
        fontFamily: "Montserrat_400Regular",
        textAlign: "center"
    },


})