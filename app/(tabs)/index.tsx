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

const ViewText = ()=>{
 if(mostrarTexto == true){
  return(
    <View>
      <Text style={styles.texto}>Titulo: {producto.title}</Text>
      <Text style={styles.texto}>Descripcion: {producto.description}</Text>
      <Text style={styles.texto}>Precio: {producto.price}</Text>
    </View>
  ) 
}
}

const [productoBack, setProductoBack] = useState([])

useEffect(()=>{
  const fetchBackend = async () => {
  try {
     const response =  await fetch("http://localhost:3030/productos")
     const data = await response.json()
     setProductoBack(data)
 } catch (error) {
    console.error('Ha ocurrido un error en la llamada a la api', error)
 }
}
fetchBackend()
},[])




  return (
   <View>
   <TextInput placeholder='titulo' style={styles.input} onChangeText={(text)=> handleChange('title', text)} className='titleInput'/>
   <TextInput style={styles.input} onChangeText={(text)=> handleChange('description', text)}className='descriptionInput'/>
   <TextInput  style={styles.input} onChangeText={(text)=> handleChange('price', text)} className='priceInput'/>

   <TouchableOpacity style={styles.boton} onPress={()=>{console.log(setMostrarTexto(true))}}> 
     <Text>Enviar</Text>
   </TouchableOpacity>
   <ViewText></ViewText>
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
  },
  texto:{
    marginLeft: 20,
  }
});

// fetch("http://localhost:3030/productos")
//  .then(res => res.json())
//  .then(data => console.log(data))

export default HomeScreen