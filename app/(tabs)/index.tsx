import { StyleSheet, View, Text, FlatList} from 'react-native'

const productos = [
  {
  title:"pelota",
  description:'inmejorable'
},
{
  title:'buzo',
  description:'muy guay'
}
]

type ItemProps = {title: string}

const Item = ({title}: ItemProps) =>(    
    <View>
      <Text>{title}</Text>
    </View>
)



const HomeScreen = () => {
  return (
   <View>
   <FlatList 
    data={productos}
    renderItem={({item})=> <Item title={item.title}></Item>}

   />
   </View>
  );
}


const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


export default HomeScreen