import React,{useState} from 'react';
import { Touchable, 
    TouchableOpacity,
     View ,
    Text,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function ImagePost({navigation}) {
    const [photo,Setphoto]=useState(null);
const handlePress=()=>{
    let options={
        quantity:1,
        mediaType:'photo',
        includeBase64:true,
    };
    launchImageLibrary(options, (response)=>{
        console.log(response.assets);
        Setphoto(response.assets[0].base64);
        

    });

}



React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.Postbutton}>
        <Text>
          Post
        </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

    return (
       <View>
              
              <TextInput
            style={styles.input}
            multiline={true}
            numberOfLines={4}
            editable
         
        placeholder="Write Here!!!"
      />

             {
                 photo && (
                    <Image 
                    source={{uri:'data:image/png;base64,'+photo}}
                    style={{height:300,width:'100%'}}
                    />
                 )
             }
             <View style={styles.buttonContainer}>
             <TouchableOpacity onPress={handlePress} style={styles.button}>
                  <Text>
                      select Image
                  </Text>
              </TouchableOpacity>
             </View>
            
            
       </View>
    );
}
const styles=StyleSheet.create({
   
    input:{
    
        borderWidth:0,
        padding:5,
        fontSize:20
      
    },
    button:{
        backgroundColor: '#d0d3d9',
        padding:10,
        width:140, justifyContent:'center',
        alignItems:'center'
       
    
      },
      buttonContainer:{ 
          margin:20,
        justifyContent:'center',
      alignItems:'center'},
      Postbutton:{
        backgroundColor: '#d0d3d9',
        padding:10,
        width:100, justifyContent:'center',
        alignItems:'center'
       
      }
});
export default ImagePost;