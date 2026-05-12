import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const [menuVisible,setMenuVisible]=useState(false);
export default function Profile(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}
            onPress={() => setMenuVisible(true)}
            >
                <Feather name='user' size={28}></Feather>
            </TouchableOpacity>
            {menuVisible &&(
                <TouchableOpacity style={styles.overlay} onPress={() => setMenuVisible(false)}>
                </TouchableOpacity>
            )}

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        width:40,
        height:40,
        borderRadius:20,
        position:'absolute',
        top:50,
        right:20,
        
    


    },
    button:{
        width:40,
        height:40,
        borderRadius:20,
        borderWidth:2,
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#f285f8',
    },
    overlay:{
        
    }

})