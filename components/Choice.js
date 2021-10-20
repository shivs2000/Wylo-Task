import React from 'react';
import { Button, StyleSheet ,View,
Text,
TouchableOpacity} from 'react-native';

function Choice({navigation}) {
    const textNav=()=>{
        navigation.navigate('Text')
    }
    const imagePost=()=>{
        navigation.navigate('Image')
    }
    return (
        <View style={styles.container}>
          <View
          
          > 
          <TouchableOpacity style={styles.buttons} onPress={textNav}>

          <Text>
              Text
        </Text>
        </TouchableOpacity>
        </View>
          <View  >
              <TouchableOpacity style={styles.buttons} onPress={imagePost}>
               <Text>
              
                   Image
              </Text> 
              </TouchableOpacity>
          </View>
        </View>
    );
}
const styles=StyleSheet.create({
    buttons:{
        width:100,
        height:40,
        backgroundColor:"#d0d3d9",
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20

    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }



});
export default Choice;