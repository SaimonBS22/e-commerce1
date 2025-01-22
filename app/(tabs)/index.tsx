import { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'



const HomeScreen = () => {

  const [producto, setProducto] = useState({title:'',description:'', price:''})

  const handleChange = (key: string, value: string)=>{
        setProducto((prevProducto)=> ({
          ...prevProducto,
          [key]: key === 'price' ? parseFloat(value) || '' : value, 
        }))
  }

const [mostrarTexto, setMostrarTexto] = useState(false)

const viewText = ()=>{
 if(mostrarTexto === true){
  return(
    producto.title,
    producto.description,
    producto.price
  )
}
}




  return (
   <View>
   <TextInput placeholder='titulo' style={styles.input} onChangeText={(text)=> handleChange('title', text)} className='titleInput'/>
   <TextInput style={styles.input} onChangeText={(text)=> handleChange('description', text)}className='descriptionInput'/>
   <TextInput  style={styles.input} onChangeText={(text)=> handleChange('price', text)} className='priceInput'/>

   <TouchableOpacity style={styles.boton} onPress={()=>{console.log(viewText())}}> 
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