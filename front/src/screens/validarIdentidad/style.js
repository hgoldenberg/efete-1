import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
  },
  title: {
    color: "#6F76E4",
    fontSize: 22,
    fontFamily: "nunito",
    margin: "3%",
    textAlign: "center",
    textTransform: "uppercase",
    marginTop:"20%"
  },
  icon: {
    width: 150,
    height: 150,
    marginTop: "4%",
    marginBottom: "6%",
  },
  text: {
    fontFamily: "nunito",
    fontSize: 30,
    marginTop: "3%",
    textTransform: "uppercase",
  },
  text1: {
    fontSize: 15,
    marginTop: "3%",
    marginLeft: "10%",
    marginRight: "10%",
    fontFamily: "nunito",
    textAlign: "left",
  },
  text2: {
    fontSize: 50,
    marginTop: "3%",
    fontFamily: "nunito",
    color: "#00CC96",
  },
  hr: {
    marginTop:'5%',
    width: "80%",
    borderTopColor: "#808080",
    borderTopWidth: 1,
  },
  volver: {
    padding: "1%",
    borderRadius: 5,
    marginTop: "15%",
    marginRight: "1%",
    borderWidth: 1,
    borderColor: "#00CC96",
  },
  textCancelar: {
    color: "#00CC96",
    fontSize: 20,
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingBottom: "3%",
    paddingTop: "2%",
    fontFamily: "nunito",
  },
  confirmar: {
    backgroundColor: "#00CC96",
    padding: "1%",
    borderRadius: 5,
    marginTop: "15%",
    marginLeft: "1%",
  },
  textConfirmar: {
    color: "white",
    fontSize: 20,
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingBottom: "3%",
    paddingTop: "2%",
    fontFamily: "nunito",
  },
  botonesCont: {
    marginTop:"10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
