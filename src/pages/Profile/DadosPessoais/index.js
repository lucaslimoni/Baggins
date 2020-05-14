import Reactotron from "reactotron-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Card, Button, Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-community/async-storage";
import FileViewer from "react-native-file-viewer";
import DocumentPicker from "react-native-document-picker";
import Spinner from "react-native-loading-spinner-overlay";
const STORAGE_KEY = "@userData";
const imagem = [
  require("../../../assets/img/background/travel/0.jpg"),
  require("../../../assets/img/background/travel/1.jpg"),
  require("../../../assets/img/background/travel/2.jpg"),
  require("../../../assets/img/background/travel/3.jpg"),
  require("../../../assets/img/background/travel/4.jpg"),
  require("../../../assets/img/background/travel/5.jpg"),
  require("../../../assets/img/background/travel/6.jpg"),
  require("../../../assets/img/background/travel/7.jpg"),
  require("../../../assets/img/background/travel/8.jpg"),
  require("../../../assets/img/background/travel/9.jpg"),
  require("../../../assets/img/background/travel/10.jpg"),
  require("../../../assets/img/background/travel/11.jpg"),
  require("../../../assets/img/background/travel/12.jpg"),
  require("../../../assets/img/background/travel/13.jpg"),
  require("../../../assets/img/background/travel/14.jpg"),
  require("../../../assets/img/background/travel/15.jpg"),
  require("../../../assets/img/background/travel/16.jpg"),
  require("../../../assets/img/background/travel/17.jpg"),
  require("../../../assets/img/background/travel/18.jpg"),
  require("../../../assets/img/background/travel/19.jpg"),
  require("../../../assets/img/background/travel/20.jpg"),
];

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

const storage = async () => {
  let userData;
  try {
    userData = await AsyncStorage.getItem(STORAGE_KEY).then((response) => {
      return response;
    });
    Reactotron.log("item lido com sucesso");
  } catch (error) {
    Reactotron.log(error);
  }
  return JSON.parse(userData);
};

async function getImage() {
  // Pick a single file
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images],
    });

    Reactotron.log(
      res.uri,
      res.type, // mime type
      res.name,
      res.size
    );
    return res.uri;
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
}
export default function dadosPessoais({ navigation }) {
  Reactotron.log(navigation);
  const [storeData, setStoreData] = useState(
    navigation.state.params.dados ? navigation.state.params.dados : storage()
  );
  Reactotron.log("StoreDataINIT: ", storeData);

  const [nome, setNome] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [image, setImage] = useState(
    require("../../../assets/img/imageProfile/lucaslimoni.png")
  );
  useEffect(() => {
    setSpinner(true);
    setTimeout(() => {
      if (storeData && storeData._55) {
        Reactotron.log("StoreDataFinal: ", storeData);
        const dados = storeData._55 ? storeData._55 : storeData;
        setNome(dados.nome);
        setDataNasc(dados.data);
        setEmail(dados.email);
        setTelefone(dados.telefone);
        setPais(dados.pais);
        setEstado(dados.estado);
        setCidade(dados.cidade);
      }
      setSpinner(false);
    }, 1000);
  }, []);
  const userData = {
    nome: nome,
    dataNasc: dataNasc,
    email: email,
    telefone: telefone,
    pais: pais,
    estado: estado,
    cidade: cidade,
  };
  return (
    <View>
      <ImageBackground
        source={imagem[getRandom(21)]}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
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
              textContent={"Carregando..."}
              textStyle={{ color: "#CCC" }}
            />
          </View>
          <Card
            // title={"item.title"}
            // image={<Avatar size="xlarge" rounded source={imagem[num]} showAccessory />}
            // imageStyle={{ height: 150, borderRadius: 25 }}
            containerStyle={{
              width: "95%",
              marginTop: "50%",
              marginBottom: 10,
              borderRadius: 10,
              opacity: 0.7,
              // backgroundColor: "transparent",
            }}
          >
            <View
              style={{
                // flex: 1,
                alignItems: "center",
                justifyContent: "center",
                opacity: 1,
                // backgroundColor: "transparent",
              }}
            >
              <Avatar
                size="xlarge"
                rounded
                source={image}
                showEditButton
                onEditPress={() => {
                  setImage(getImage());
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {nome}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {dataNasc}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {email}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {telefone}
              </Text>
              <Text
                style={{
                  marginBottom: "1%",
                  alignSelf: "center",
                }}
              >
                {pais + " - " + estado + " - " + cidade}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                position: "relative",
                bottom: 0,
              }}
            >
              <Button
                title="&nbsp;&nbsp;ALTERAR"
                icon={<Icon name="md-create" color="#ffffff" size={28} />}
                containerStyle={{ marginTop: "2%" }}
                // iconRight={true}
                buttonStyle={{
                  borderRadius: 5,
                  width: "100%",
                }}
                onPress={() => {
                  navigation.navigate("AlterarDadosPessoais", {
                    dados: userData,
                  });
                }}
              />
            </View>
          </Card>
        </View>
      </ImageBackground>
    </View>
  );
}
