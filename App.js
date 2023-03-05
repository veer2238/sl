
import { Text,StyleSheet, View } from 'react-native';
import Slider from './Slider';




export default function App() {
  return (
    <View style={styles.Main}>
    <View style={styles.Head}>
    <Text style={styles.Teaxp}>hellow World</Text>
    </View>

    <Slider/>

   

    </View>
  );
}

const styles = StyleSheet.create({
  Teaxp:{
    color:"red",
    fontSize:30,
    textAlign:"center"
    
    

  },
Head:{
  height:50,
  backgroundColor:"grey",
  width:"100%"
  
},
Main:{
  width:"100%"
}

})





