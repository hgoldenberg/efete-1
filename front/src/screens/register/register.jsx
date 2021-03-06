import React from "react";
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Dimensions,
  Picker,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { style } from "./style.js";

export default ({
  firstNameChange,
  usernameChange,
  lastNameChange,
  dniChange,
  passwordChange,
  handleSubmit,
  navigation,
  user,
  handleGender,
  mode,
  gender,
  validDni,
  validFirst,
  validGender,
  validLast,
  validPass,
  validUser,
}) => {
  var height = Dimensions.get("screen").height;

  return (
    <ScrollView>
      <View style={{ height: '90%' }}>
        <View style={{ height: height * 0.9 }}>
          <Text style={style.titulo}>Efeté</Text>
          <Text style={style.registrarse}>Registrarte</Text>

          <View style={style.inputContainer}>
            <View style={style.searchSection}>
              <Icon
                style={style.searchIcon}
                name="account-circle-outline"
                size={24}
                color="#94AFB6"
              />
              <TextInput
                style={style.input}
                placeholder="Nombre"
                onChangeText={(text) => firstNameChange(text)}
              />
            </View>
            <View style={style.hr} />
            <View style={style.searchSection}>
              <Icon
                style={style.searchIcon}
                name="account-circle-outline"
                size={24}
                color="#94AFB6"
              />
              <TextInput
                style={style.input}
                placeholder="Apellido"
                onChangeText={(text) => lastNameChange(text)}
              />
            </View>
            <View style={style.hr} />
            <View style={style.searchSection}>
              <Icon
                style={style.searchIcon}
                name="account-circle-outline"
                size={24}
                color="#94AFB6"
              />
              <TextInput
                keyboardType="numeric"
                style={style.input}
                placeholder="DNI"
                onChangeText={(text) => dniChange(text)}
              />
            </View>

            <View style={style.hr} />
            <View style={{ flexDirection: "row", flex: 1 }}>
              <Icon
                style={{
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingLeft: 10,
                  alignSelf: "center",
                }}
                name="account-circle-outline"
                size={24}
                color="#94AFB6"
              />

              <View style={{ alignSelf: "center" }}>
                <Picker
                  style={{ height: 50, width: 170 }}
                  onValueChange={(item) => handleGender(item)}
                  selectedValue={gender}
                >
                  <Picker.Item
                    value=""
                    label="Indicar genero"
                    color="#b6b6b6"
                  />
                  <Picker.Item label="Femenino" value="F" />
                  <Picker.Item label="Masculino" value="M" />
                </Picker>
              </View>
            </View>

            <View style={style.hr} />
            <View style={style.searchSection}>
              <Icon
                style={style.searchIcon}
                name="email-outline"
                size={24}
                color="#94AFB6"
              />
              <TextInput
                keyboardType="email-address"
                style={style.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={(text) => usernameChange(text)}
              />
            </View>

            <View style={style.hr} />
            <View style={style.searchSection}>
              <Icon
                style={style.searchIcon}
                name="lock-outline"
                size={24}
                color="#94AFB6"
              />
              <TextInput
                autoGrow={true}
                importantForAutofill="yes"
                autoCapitalize="none"
                secureTextEntry={true}
                password={true}
                style={style.input}
                placeholder="Contraseña"
                onChangeText={(text) => passwordChange(text)}
              />
            </View>
          </View>
        </View>
        {/* ::::: ALERTAS  ACA ::::: */}
        {user.messageUsername ? (
          <View>
            <Text style={style.alerta}>{user.messageUsername}</Text>
          </View>
        ) : null}

        {user.messageDni ? (
          <View>
            <Text style={style.alerta}>{user.messageDni}</Text>
          </View>
        ) : null}
        {/* ::::: ALERTAS  ACA ::::: */}

        <View
          style={{
            height: height * 0.2,
          }}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "center",
              marginTop: '2%'
            }}
          >
            <Button
              disabled={
                validUser ||
                validLast ||
                validPass ||
                validGender ||
                validDni ||
                validFirst
              }
              buttonStyle={style.botonIniciar}
              titleStyle={style.tituloIniciar}
              title="Registrarse"
              onPress={() => {
                handleSubmit();
              }}
            />

            <Button
              buttonStyle={style.botonRegister}
              titleStyle={style.tituloRegister}
              title="Iniciar Sesión"
              onPress={() => {
                navigation.navigate("Login");
              }}
            ></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
