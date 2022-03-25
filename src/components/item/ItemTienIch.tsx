import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import dataTienIch from "../../dataDemo/TienIch";
import { Text, View } from "../Themed";

import Sos from "../../assets/images/sos.svg";
import { Alert, Touchable, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { SendNotiSoS } from "../../utils/api/Main";

type Props = {
  ItemTienIch?: any;
};

const ItemTienIch = (props: Props) => {
  const { ItemTienIch } = props;
  const data = ItemTienIch;

  console.log("loaiTienIch", data.loaiTienIch);
  const auth = useAppSelector((state) => state.auth);
  // const sendNoti = useCallback(() => {
  //   if (auth.token)
  //     dispatch(SendNotiSoSAsync({ idTienIch: data.id, token: auth.token }));
  // }, [data, auth]);

  const sendNoti = useCallback(() => {
    const sendNoti = async (idTienich: string, token: string) => {
      await SendNotiSoS({ idTienich, token });
    };
    if (data.idTienIch && auth.token) {
      sendNoti(data.idTienIch, auth.token);
    }
  }, []);
  const [qrLayOut, setQrLayout] = useState(false);
  return (
    <View>
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
          {/* <Text style={{ color: "#fff" }}>id Tiện Ích {data.id}</Text> */}
          <Text style={{ color: "#fff" }}>
            Loại tiện ích : {data.loaiTienIch}
          </Text>
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
          <TouchableOpacity
            onLongPress={() => {
              setQrLayout((old) => !old);
              console.log("QrLayout", qrLayOut);
            }}
          >
            <View style={{ flex: 1, padding: 15 }}>
              <Text>{data.tenNguoiDung}</Text>
              <Text>Vai trò {data.vaiTroNGuoiDung}</Text>

              <Text>Địa chỉ : {data.tenDoiTuong}</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              flex: 1,
            }}
          >
            <TouchableOpacity onPress={sendNoti}>
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
      {qrLayOut && (
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }} />
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                backgroundColor: "red",
                marginRight: 10,
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Text>Cài đặt thiết bị</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ItemTienIch;
