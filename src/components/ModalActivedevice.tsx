import React, { useState } from "react";
import { Alert, Button, Modal, Pressable, StyleSheet } from "react-native";
import { View, Text } from "./Themed";
import { Picker } from "@react-native-picker/picker";
import { useAppSelector } from "../redux/store/hooks";
type Props = {
  idThietbi: string;
  onActiveDevice: (idDevice: string, idTienIch: string) => void;
  visible: Boolean;
};
import { CustomPicker } from "react-native-custom-picker";
const ModalActivateDevice = (props: Props) => {
  const dsTienIch = useAppSelector((state) => state.tienich.dsTienIch);
  console.log("ModalActivateDevice dsTienIch", dsTienIch?.length);

  const [isShow, SetIsShow] = useState(props.visible);

  const [idTienIch, SetIdTienIch] = useState<string>(
    dsTienIch ? dsTienIch[0].idTienIch : ""
  );
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isShow ? true : false}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>Chọn tiện ích ghép nối</Text>
          <CustomPicker
            options={dsTienIch}
            getLabel={(item) => item.loaiTienIch}
            placeholder={
              dsTienIch ? dsTienIch[0].loaiTienIch : "chọn tiện ích ..."
            }
            headerTemplate={renderHeader}
            defaultValue={dsTienIch ? dsTienIch[0].idTienIch : ""}
            onValueChange={(value) => {
              SetIdTienIch(value.idTienIch);
            }}
          />

          <Button
            onPress={() => {
              SetIsShow((old) => !old);
              props.onActiveDevice(props.idThietbi, idTienIch);
            }}
            title="Ghép nối"
            color="#841584"
          />
        </View>
      </View>
    </Modal>
  );
};
function renderHeader() {
  return (
    <View style={{ padding: 5, alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Chọn tiện ích
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ModalActivateDevice;
