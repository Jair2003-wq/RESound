import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { Image,Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Feather from '@expo/vector-icons/Feather';

export default function MainMenu (navigation : any){

    const[fontsLoaded]=useFonts({
        Montserrat_400Regular
    });
    return(
        <View>

            <Text style={styles.title}>Hola uwu</Text>
            <TouchableOpacity style={styles.buttonArtist}>
                <Image
                source={require("@/assets/images/paleta.png")}
                style={styles.artistIcon}
                />
                <Text style={styles.text}>Artista</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGenero}>
                <Image
                source={require("@/assets/images/genero.png")}
                style={styles.generoIcon}
                />
                <Text style={styles.text}>Género</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonMusic}>
                <Image
                source={require("@/assets/images/musica.png")}
                style={styles.musicIcon}
                />
                <Text style={styles.text}>Canción</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAsist}>
                <Image
                source={require("@/assets/images/logonegro.png")}
                style={styles.asistIcon}
                />
            </TouchableOpacity>
        </View>
    )
       
} 

const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontFamily:"Montserrat_400Regular",
        marginTop:200,
        justifyContent:'center',
        textAlign:'center'

    },
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',

    },
    buttonArtist:{
        position:'absolute',
        top:230,
        left:25,
        width:150,
        height:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',

    },
    artistIcon:{
        width:50,
        height:50,
        alignContent:'center',
        alignItems:'center',

    },
    text:{
        fontSize:24,
        fontFamily:"Montserrat_400Regular",

    },
    buttonGenero:{
        position:'absolute',
        top:230,
        right:25,
        width:150,
        height:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',

    },
    generoIcon:{
        width:50,
        height:50,
        alignContent:'center',
        alignItems:'center',

    },
    buttonMusic:{
        position:'absolute',
        top:350,
        right:110,
        width:150,
        height:100,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'

    },
    musicIcon:{
        width:50,
        height:50,
        alignContent:'center',
        alignItems:'center',

    },
    buttonAsist:{
        position:'absolute',
        top:500,
        right:110,
        width:150,
        height:150,
        borderRadius:75,
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'

    },
    asistIcon:{
        width:50,
        height:50,
        resizeMode:'contain',

    },


})