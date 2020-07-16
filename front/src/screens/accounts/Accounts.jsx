import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";

const Accounts = ({ accountsUser, loading, handleDelete, navigation }) => {
  return (
    <View>
      {loading ? (
        <View>
          <Text> CUENTAS ASOCIADAS</Text>

          <FlatList
            keyExtractor={(accountsUser) => accountsUser._id}
            data={accountsUser}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text
                    onPress={() =>
                      navigation.navigate("SingleAccount", { account: item })
                    }
                  >
                    <Text>Entidad: {item.nameEntity}</Text>
                    <br />
                    <Text>Cuenta: {item.accountNumber}</Text>
                  </Text>
                  <Button
                    title="ELIMINAR CUENTA"
                    onPress={() => {
                      console.log("item", item._id);
                      handleDelete(item._id);
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Accounts;
