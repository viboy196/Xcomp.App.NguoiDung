import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import { Alert, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import { useAppSelector } from "../redux/store/hooks";
import { RootStackScreenProps } from "../types";
import { Picker } from "@react-native-picker/picker";
import { ActivateDeviceByUser } from "../utils/api/Main";
import { tintColorLight } from "../constants/Colors";

export default function ActiveDevice({
  navigation,
  route,
}: RootStackScreenProps<"ActiveDevice">) {
  const { idThietBi, DeviceName } = route.params.thietbi;
  const dsTienIch = useAppSelector((state) => state.tienich.dsTienIch);
  const token = useAppSelector((state) => state.auth.token);

  const [selecteIdTienIch, setSelecteIdTienIch] = useState("");

  const activateDevice = useCallback((idDevice: string, idTienich) => {
    const activateDevice = async () => {
      if (token) {
        var res = await ActivateDeviceByUser({ idDevice, idTienich, token });
        if (res.status) {
          Alert.alert("Thành công", `Ghép nối ${DeviceName} thành công`, [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Main");
              },
            },
          ]);
        }
        // if (res.status) navigation.goBack();
      }
    };

    activateDevice();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          borderBottomColor: "#eee",
          borderBottomWidth: 1,
        }}
      >
        <Text
          style={{
            marginLeft: 20,
            fontSize: 24,
          }}
        >
          Kết Nối thiết bị
        </Text>

        <View
          style={{
            flex: 1,
          }}
        ></View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("QrScan");
          }}
        >
          <FontAwesome
            name={"qrcode"}
            size={25}
            color={"#2f95dc"}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
      <Text>Thiết bị</Text>
      <TouchableOpacity style={styles.link}>
        <Text style={styles.linkText}> {DeviceName}</Text>
      </TouchableOpacity>
      <Text>Chọn tiện ích ghép nối</Text>

      <Picker
        style={{ width: "100%" }}
        selectedValue={selecteIdTienIch}
        onValueChange={(itemValue, itemIndex) => setSelecteIdTienIch(itemValue)}
      >
        <Picker.Item label="chọn tiện ích" value="" />
        {dsTienIch.map((acct) => (
          <Picker.Item
            key={acct.idTienIch}
            label={acct.loaiTienIch}
            value={acct.idTienIch}
          />
        ))}
      </Picker>
      <TouchableOpacity
        onPress={() => {
          if (selecteIdTienIch.length < 10)
            Alert.alert("chọn tiện ích ghép nối !!!");
          else activateDevice(idThietBi, selecteIdTienIch);
        }}
      >
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: tintColorLight,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Ghép nối
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
