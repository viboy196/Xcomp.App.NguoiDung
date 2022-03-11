import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";

import { useAppDispatch } from "../../redux/store/hooks";
import { logOut } from "../../redux/features/auth/authSlices";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useAppSelector } from "../../redux/store/hooks";
import { RootTabScreenProps } from "../../types";
import { DetailInfo } from "../../utils/api";
//import axios, { urlDetail } from "../../utils/api/apiLink";
import axios from "axios";
import ItemFormCongViec from "../../components/item/ItemFormCongViec";
import { TabBarIcon } from ".";
import { FontAwesome } from "@expo/vector-icons";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const dispatch = useAppDispatch();
  const [vehicleData, setVehicleData] = React.useState<any[]>([]);

  const auth = useAppSelector((state) => state.auth);
  const fetchMyAPI = useCallback(async () => {
    if (auth.token !== undefined) {
      let response = await DetailInfo(auth.token);
      if (
        response.status === false &&
        response.errorMessage === "Unauthorized"
      ) {
        dispatch(logOut());
      }
      if (response.status === true) {
        const arrCv = response.result.dsNhanVienModel as Array<{}>;

        arrCv.forEach((item) => {
          console.log(item);

          setVehicleData((old) => [...old, { ...item }]);
        });
        console.log("arrCv", vehicleData);
      }
    }
  }, []);

  useEffect(() => {
    fetchMyAPI();
  }, [fetchMyAPI]);
  const getdetail = async () => {
    const res = await axios.get(
      "http://api.kachiusa.vn/api/NguoiDung/Detail?v=1.0",
      {
        headers: {
          Authorization: `bearer ${auth.token}`,
          accept: "text/plain",
        },
      }
    );
    console.log(res.data);
  };
  const renderItem = (item: any) => (
    <ItemFormCongViec
      titleCv={item.vaiTro}
      titleChucvu={item.name}
      titleToChuc={item.nameToChuc}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
      }}
    >
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
            fontSize: 32,
          }}
        >
          Xcomp
        </Text>
        <View
          style={{
            flex: 1,
          }}
        ></View>
        <TouchableOpacity>
          <FontAwesome
            name={"bars"}
            size={25}
            color={"blue"}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={vehicleData}
        renderItem={({ item }) => renderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
