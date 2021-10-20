import React,{useEffect, useState} from 'react';
import { 
    Text,
    View,
    TextInput, 
    StyleSheet ,
    TouchableOpacity

} from 'react-native';
import axios from 'axios';

function TextPost({navigation}) {

    const [text,SetText]=useState('');
const onSubmit=async ()=>{


    try{
        const res=await axios.Post('http://localhost:5000/createPost',{
            text:text,
          

        });
        console.log(res);


    }catch(e){

    }

}

    useEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity onPress={onSubmit} style={styles.button}>
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
            onChange={(e)=>{
             SetText(e.target.value);
            }}
      />
        </View>
    );
}
const styles=StyleSheet.create({
   
input:{

    borderWidth:0,
    padding:10,
    fontSize:20
  
}
,button:{
    backgroundColor: '#d0d3d9',
    padding:10,
    width:100, justifyContent:'center',
    alignItems:'center'
   

  },

});
export default TextPost;