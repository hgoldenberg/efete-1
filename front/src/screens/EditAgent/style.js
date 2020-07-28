import { StyleSheet } from "react-native";
import { buttonColor, verdeTexto } from "../../Common/constans";

export const style = StyleSheet.create({
 container : {
    alignSelf: "center",
    backgroundColor: "#FAFBFF",    
    flex:1,
    height:'100%',
    width:'90%',

  },
  containerTitle : {
    color: "#6F76E4",
    fontSize: 22,    
    fontFamily: "nunito", 
    marginTop: "12%",
    marginBottom: "15%",
    textTransform: "uppercase",
    margin: 40,
    textAlign:'center'
  },
  title : {
    marginBottom: '3%',
    color: '#424242',
    fontSize: 15
  },
  input : {
    backgroundColor: "#ffffff",
    width: 300,
    padding: 5,
    marginBottom: 25,
    elevation: 2,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
    borderRadius:8,
    fontSize: 18,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    color: verdeTexto,
  },
  confirmar : {
    backgroundColor: "#00CC96",
    borderRadius: 5,
    marginTop: 50 ,
    width:236,
    height:43,
    alignSelf:'center',
    justifyContent:'center',
  
  },
  textConfirmar : {
    color: "#ffffff",
    fontSize: 17,
    
    fontFamily: "nunito" ,
    textAlign:'center'

  },
  openCamera : {
    alignItems: "center",
    marginTop: 20,
  },
textOpenCamera : {
    margin: 15,
    color: '#A4A4A4',
    fontSize: 15,
  },
textMaxsize : {
    margin: 5,
    color: '#606060',
    fontSize: 10, 
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius:8,
    marginTop:5,
    elevation:2,

  },
  text: {
    alignSelf:'flex-start',
    
    textAlign: "left",
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    //fontFamily: "sans-serif",
    marginTop: 25,
  },
  foto:{
    backgroundColor:buttonColor,
    width:125,
    height:35,
    textAlign:'center',
    paddingTop:3.5,
    borderRadius:5
}
});
