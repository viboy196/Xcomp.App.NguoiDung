import { StyleSheet, TouchableOpacity } from "react-native";

import { useAppDispatch } from "../../redux/store/hooks";
import { logOut } from "../../redux/features/auth/authSlices";
import { Text, View } from "../../components/Themed";
import React from "react";
import ThongBao from "../../components/ThongBao"
export default function TabTwoScreen() {
  const dispatch = useAppDispatch();
  return (
    <View
      style={{
        marginTop: 15,

        width: "100%",
        height: "100%",
      }}
    >
      <ThongBao/>
    </View>
  );
}
