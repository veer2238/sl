
import { Text,StyleSheet, View } from 'react-native';




export default function Slider() {
  return (
   
    <View style={styles.Slider}>

    <Text style={styles.Teaxp}>Slider part</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  Teaxp:{
    color:"red",
    fontSize:30,
    textAlign:"center"
    
    

  },
Slider:{
  height:180,
  backgroundColor:"pink",
  width:"100%",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
  
},


})





