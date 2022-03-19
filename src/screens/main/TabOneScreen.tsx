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
import TienIch from "../../components/TienIch";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const tag = "TabOneScreen";
  const auth = useAppSelector((state) => state.auth);
  const [detailUser, setDetailUser] = useState<any>({});
  useEffect(() => {
    if (auth.token)
      DetailInfo(auth.token)
        .then((data) => {
          setDetailUser(data.result);
          console.log(`${tag} | detailUser :`, detailUser);
        })
        .catch((error) => {
          console.log(`${tag} | useEffect | error :`, error);
        });
  }, [auth.token]);

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
            fontSize: 24,
          }}
        >
          {detailUser.name}
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

      <TienIch />
    </View>
  );
}

const styles = StyleSheet.create({});
