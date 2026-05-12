import {View,TouchableOpacity,StyleSheet} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from "expo-router";

const router=useRouter();

export default function BottomBar(){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Feather name='home' size={28}></Feather>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Feather name='search' size={28}></Feather>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Feather name='heart' size={28}></Feather>
            </TouchableOpacity>

        </View>


    )
}

const styles=StyleSheet.create({
    container:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:50,
        backgroundColor:'#73d5f9',
        borderRadius:0,

        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        elevation:1,

    },
    button:{
        padding:10,

    },
})