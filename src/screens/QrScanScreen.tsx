import { TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";

import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useCallback, useEffect, useState } from "react";
import { ActivateDeviceByUser } from "../utils/api/Main";
import { useAppSelector } from "../redux/store/hooks";
import { RootStackScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";
export type ThietBiType = {
  idThietBi: string;
  DeviceName: string;
};
export default function QrScanScreen({
  navigation,
}: RootStackScreenProps<"QrScan">) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const auth = useAppSelector((state) => state.auth);
  const [idThietbi, setIdThietbi] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const thietbi = JSON.parse(data) as ThietBiType;
    console.log(thietbi);
    if (thietbi.idThietBi) {
      navigation.navigate("ActiveDevice", { thietbi });
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          position: "relative",
          width: "120%",
          height: "100%",
        }}
      />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0)",
        }}
      >
        <View
          style={{
            flex: 0.75,
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{
              flexDirection: "row",
              marginTop: 30,
              marginLeft: 20,
              alignItems: "center",
            }}
          >
            <FontAwesome name={"close"} size={30} color={"#fff"} style={{}} />
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
              {" "}
              ????ng
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0)",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.1,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          ></View>

          <View
            style={{
              flex: 0.8,
              backgroundColor: "rgba(0,0,0,0)",
            }}
          ></View>

          <View
            style={{
              flex: 0.1,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          ></View>
        </View>

        <View
          style={{
            flex: 0.75,
            backgroundColor: "rgba(0,0,0,0.6)",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              margin: 5,
              fontSize: 20,
              fontWeight: "700",
            }}
          >
            Qu??t M?? QR{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}
