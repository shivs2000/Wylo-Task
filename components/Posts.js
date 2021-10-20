import React from 'react';
import { 
    Text,
    StyleSheet,
    View,
    TouchableOpacity,} 
    from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';

function Posts({navigation}) {



const onPress=()=>{
    navigation.navigate('Choice')
}
    return (
        <View style={styles.main}>
            <View style={styles.header}>
               
           </View>
           <View style={styles.content}>
              


           </View>
           <View style={styles.footer}>
               <TouchableOpacity 
                style={styles.button}
               onPress={onPress}>

               <FeatherIcon  name="plus-circle" size={35} color={'black'}/>
               </TouchableOpacity>
           </View>
        </View>
    ); 
}
const styles=StyleSheet.create({
    main:{
        flex:1,

    },
    header:{
        flex:1,
        backgroundColor:"#d0d3d9",
       
    },
    content:{
        flex:10,
        backgroundColor:'white',
       
    },
     footer:{
        flex:1,
        backgroundColor:"#d0d3d9",
        justifyContent:'center',
        alignItems:'center'
    }



});
export default Posts;