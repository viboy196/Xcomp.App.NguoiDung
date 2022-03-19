import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect } from "react";
import dataTienIch from "../../dataDemo/TienIch";
import { Text, View } from "../Themed";

import Sos from "../../assets/images/sos.svg";
import { Alert, Touchable, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { SendNotiSoSAsync } from "../../redux/features/tienich/tienichSlice";

const ItemTienIch = () => {
  const data = dataTienIch[0];
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const tienich = useAppSelector((state) => state.tienich);
  useEffect(() => {
    if (tienich.status) Alert.alert("gửi tín hiệu S0S", "thành công");
  }, [tienich]);
  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: "#7e7e7e",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "#7e7e7e",
          paddingHorizontal: 20,
          paddingVertical: 5,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        }}
      >
        <Text style={{ color: "#fff" }}>Tên tiện ích {data.loaiTienIch}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View style={{ flex: 1, padding: 15 }}>
          <Text>{dataTienIch[0].name}</Text>
          <Text>Vai trò {data.vaiTroNguoiDung}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (auth.token)
                dispatch(
                  SendNotiSoSAsync({ idTienIch: data.id, token: auth.token })
                );
            }}
          >
            <View
              style={{
                width: 60,
                height: 60,
                borderColor: "#3e3e3e",
                borderRadius: 40,
                borderWidth: 7,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                SOS
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemTienIch;
