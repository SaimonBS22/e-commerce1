import { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'


      let producto = {
        title : document.getElementsByClassName('titleInput'),
        description: document.getElementsByClassName('descriptionInput'),
        price: document.getElementsByClassName('priceInput')
      }



const HomeScreen = () => {
  const [title, setTitle] = useState('Titulo')
  const [description, setDescription] = useState('Descripcion')
  const [price, setPrice] = useState('Precio')

  const handlePress = () =>{
    alert('presionado')
  }


  return (
   <View>
   <TextInput value={title} placeholder='titulo' style={styles.input} onChangeText={setTitle} className='titleInput'/>
   <TextInput value={description} style={styles.input} onChangeText={setDescription} className='descriptionInput'/>
   <TextInput value={price} style={styles.input} onChangeText={setPrice} className='priceInput'/>

   <TouchableOpacity style={styles.boton} onPress={handlePress}> 
     <Text>Enviar</Text>
   </TouchableOpacity>
   
   </View>
  );
}


const styles = StyleSheet.create({
  input:{
    height: 25,
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft:50,
    marginTop:25
  },
  boton:{
    flexDirection: 'column',
    height: 25,
    width: 100,
    borderRadius:15,
    marginLeft:50,
    marginTop:25,
    backgroundColor: 'grey',
    textDecorationColor: 'white'
  }
});


export default HomeScreen