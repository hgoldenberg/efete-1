import { StyleSheet, Dimensions } from "react-native";
import {
  headerColor,
  buttonColor,
  headerColorDark,
  lilaDark,
  buttonDark,
  fondoColor,
  violetaOscuro,
} from "../../Common/constans";

export const style = StyleSheet.create({
  monto: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "nunito",
    marginTop: 30,
    color: `${headerColor}`,
  },
  valor: {
    marginBottom: 50,
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    marginTop: 10,
    borderColor: "#807fc7",
  },
  valorDark: {
    marginBottom: 50,
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    marginTop: 10,
    borderColor: lilaDark,
    color: "white",
  },
  montoContainer: {
    borderRadius: 5,
    marginBottom: 50,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 3,
  },
  otroMonto: {
    backgroundColor: "white",
    height: 66,
  },
  otroMontoDark: {
    backgroundColor: headerColorDark,
    height: 66,
  },
  otroMontoTitulo: {
    color: `${buttonColor}`,
    fontSize: 15,
    textAlign: "center",
  },
  otroMontoTituloDark: {
    color: "#8C92EA",
    fontSize: 15,
    textAlign: "center",
  },
  confirmar: {
    width: 160,
    height: 55,
    backgroundColor: `${buttonColor}`,
    marginTop: 10,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
  confirmarDisabled: {
    width: 160,
    height: 55,
    marginTop: 10,
    alignSelf: "center",
  },
  tituloConfirmarDisabled: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "100%",
  },
  contBotones: {
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  cancelar: {
    width: 160,
    height: 55,
    backgroundColor: fondoColor,
    marginTop: 10,
    alignSelf: "center",
    
  },

  cancelarDark: {
    width: 160,
    height: 55,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor:"black"
    
  },
  tituloCancelar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: violetaOscuro,
    fontWeight: "bold",
  },
  tituloCancelarDark: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: headerColor,
    fontWeight: "bold",
  },
});
