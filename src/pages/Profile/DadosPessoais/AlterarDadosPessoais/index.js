import Reactotron from "reactotron-react-native";
import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Input, Button, Card, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { classes } from "./style.js";
import DateTimePicker from "@react-native-community/datetimepicker";
import Spinner from "react-native-loading-spinner-overlay";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";
const STORAGE_KEY = "@userData";

const storage = async () => {
  let userData;
  try {
    userData = await AsyncStorage.getItem(STORAGE_KEY).then((response) => {
      return response;
    });
  } catch (error) {
    Reactotron.log(error);
  }
  return JSON.parse(userData);
};

export default function AlterarDadosPessoais({ navigation }) {
  const [storeData, setStoreData] = useState(
    navigation.state.params.dados ? navigation.state.params.dados : storage()
  );
  const [date, setDate] = useState();
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  Reactotron.log("StoreDataInit: ", storeData);

  useEffect(() => {
    setTimeout(() => {
      if (storeData || storeData._55) {
        const dados = storeData._55 ? storeData._55 : storeData;
        setNome(dados.nome);
        setDate(dados.dataNasc);
        setEmail(dados.email);
        setTelefone(dados.telefone);
        setPais(dados.pais);
        setEstado(dados.estado);
        setCidade(dados.cidade);
      }
    }, 500);
  }, []);

  const userData = {
    nome: nome,
    data: date,
    email: email,
    telefone: telefone,
    pais: pais,
    estado: estado,
    cidade: cidade,
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(moment(currentDate).format("DD/MM/YYYY"));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View
      style={{
        top: 0,
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
      }}
    >
      <View
        style={{
          top: 0,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5FCFF",
        }}
      >
        <Spinner
          visible={spinner}
          textContent={"Salvando..."}
          textStyle={{ color: "#CCC" }}
        />
      </View>
      <Card
        containerStyle={{
          height: "80%",
          width: "95%",
          // marginTop: "50%",
          // marginBottom: 10,
          borderRadius: 10,
          opacity: 0.7,
          // backgroundColor: "transparent",
        }}
      >
        <ScrollView>
          <Input
            label={"Nome"}
            placeholder="Nome"
            leftIcon={{ type: "font-awesome", name: "address-card" }}
            leftIconContainerStyle={classes.inputIcon}
            value={nome}
            onChangeText={(event) => {
              setNome(event);
            }}
          />
          <Input
            label={"Data Nascimento"}
            // editable={false}
            placeholder="Data Nascimento"
            value={date}
            keyboardAppearance={"dark"}
            leftIcon={{ type: "font-awesome", name: "calendar" }}
            leftIconContainerStyle={classes.inputIcon}
            onTouchStart={showDatepicker}
          />
          <Input
            label={"Email"}
            placeholder="Email"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            leftIconContainerStyle={classes.inputIcon}
            keyboardType={"email-address"}
            value={email}
            onChangeText={(event) => {
              setEmail(event);
            }}
          />
          <Input
            label={"Telefone"}
            placeholder="Telefone"
            leftIcon={{ type: "font-awesome", name: "mobile" }}
            leftIconContainerStyle={classes.inputIcon}
            value={telefone}
            keyboardType={"numeric"}
            onChangeText={(event) => {
              setTelefone(event);
            }}
          />
          <Input
            label={"País"}
            placeholder="País"
            leftIcon={{ type: "font-awesome", name: "map-marker" }}
            leftIconContainerStyle={classes.inputIcon}
            value={pais}
            onChangeText={(event) => {
              setPais(event);
            }}
          />
          <Input
            label={"Estado"}
            placeholder="Estado"
            leftIcon={{ type: "font-awesome", name: "map-marker" }}
            leftIconContainerStyle={classes.inputIcon}
            value={estado}
            onChangeText={(event) => {
              setEstado(event);
            }}
          />
          <Input
            label={"Cidade"}
            placeholder="Cidade"
            leftIcon={{ type: "font-awesome", name: "map-marker" }}
            leftIconContainerStyle={classes.inputIcon}
            value={cidade}
            onChangeText={(event) => {
              setCidade(event);
            }}
          />
        </ScrollView>
      </Card>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          // timeZoneOffsetInMinutes={0}
          value={new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          locale={"pt-BR"}
        />
      )}
      <View style={{ width: "95%" }}>
        <Button
          title="&nbsp;&nbsp;SALVAR"
          icon={<Icon name="md-create" color="#ffffff" size={28} />}
          containerStyle={{ marginTop: "10%", marginBottom: "10%" }}
          // iconRight={true}
          buttonStyle={{
            borderRadius: 5,
            width: "100%",
          }}
          onPress={async () => {
            setSpinner(true);

            try {
              await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
              setTimeout(() => {
                setSpinner(false);
                navigation.navigate("Profile", {
                  dados: userData,
                });
              }, 1000);
              Reactotron.log("item gravado com sucesso");
            } catch (error) {
              Reactotron.log(error);
            }
          }}
        />
      </View>
    </View>
  );
}
