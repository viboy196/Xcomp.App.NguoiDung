import { View, Text } from "../components/Themed";

import { TextInput, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { loginAsync } from "../redux/features/auth/authSlices";
import { useState } from "react";
const TestLogin = () => {
  const data = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [phoneInput, setPhoneInput] = useState("0988888888");

  const [passwordInput, setPasswordInput] = useState("123456");

  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <View>
        <Text>{data.loading}</Text>
        <Text>{data.token}</Text>
      </View>
      <TextInput
        value={phoneInput}
        onChangeText={(text) => setPhoneInput(text)}
        placeholder="Nhap so dien thoai"
      />

      <TextInput
        value={passwordInput}
        onChangeText={(text) => setPasswordInput(text)}
        placeholder="Nhap mat khau"
      />

      <TouchableOpacity
        onPress={() => {
          if (phoneInput !== "" && passwordInput !== "")
            dispatch(
              loginAsync({ phone: phoneInput, password: passwordInput })
            );
        }}
      >
        <Text>an nut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TestLogin;
