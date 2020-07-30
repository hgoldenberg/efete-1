import { StyleSheet } from "react-native";
import { buttonColor, verdeTexto, cardDark, lilaDark, azulClaro, azulDark } from "../../Common/constans";

export const style = StyleSheet.create({
  botonAgregar: {
    backgroundColor: buttonColor,
    width: 200,
    height: 48,
    alignSelf: "center",
    marginBottom: 30,
  },
  tituloAgregar: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "nunito",
    fontWeight: "normal",
  },

  asociadas: {
    fontSize: 24,
    color: "#6F76E4",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 15,
    fontFamily: "nunito",
   
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: 370,
  },
  parent: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    height: 96,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  parentDark: {
    flex: 1,
    backgroundColor: cardDark,
    borderRadius: 12,
    alignSelf: "center",
    height: 96,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  parentOnly: {
    backgroundColor: "white",
    borderRadius: 12,
    alignSelf: "center",
    height: 96,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
    marginTop: 15,
  },

  negrita: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 17,
  },
  negritaDark: {
    fontWeight: "bold",
    marginRight: 5,
    fontSize: 17,
    color:lilaDark
  },


  negocio: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 25,
    marginLeft: 7,
  },
  tex: {
    color: verdeTexto,
    fontSize: 17,
  },
  texDark: {
    color: azulDark,
    fontSize: 17,
  },
});