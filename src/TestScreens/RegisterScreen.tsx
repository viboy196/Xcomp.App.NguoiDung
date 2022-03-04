import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useAppDispatch } from "../redux/store/hooks";
import { registerAsync } from "../redux/features/register/registerSlices";

import { View, Text } from "../components/Themed";
import Input from "./components/input";
import {
  validateName,
  validatePassword,
  validatePhoneNumber,
} from "../ultils/validate";
import { validatePathConfig } from "@react-navigation/native";

const Register = () => {
  const dispatch = useAppDispatch();

  const [textFullName, setTextFullName] = useState("Nguyễn Văn Đàn");

  const [textPhone, setTextPhone] = useState("0988888888");

  const [textPassword, setTextPassword] = useState("123456");

  const [textPasswordRedo, setTextPasswordRedo] = useState("123456");

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Y TẾ MỚI
        </Text>
      </View>
      <View style={styles.loginForm}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Đăng ký</Text>
        </View>
        <View style={styles.inputForm}>
          <Input
            title={"Họ và tên"}
            value={textFullName}
            onChangeInput={(text: string) => {
              console.log(text);
              setTextFullName(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="user"
            color={"blue"}
            errorMessages={
              validateName(textFullName) ? undefined : "Tên không hợp lệ"
            }
          />
          <Input
            title={"Số điện thoại"}
            value={textPhone}
            keyboardType={"numeric"}
            onChangeInput={(text: string) => {
              console.log(text);
              setTextPhone(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="phone"
            color={"blue"}
            errorMessages={
              validatePhoneNumber(textPhone)
                ? undefined
                : "số điện thoại không hợp lệ"
            }
          />

          <Input
            title={"Mật khẩu"}
            value={textPassword}
            onChangeInput={(text: string) => {
              console.log(text);
              setTextPassword(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="keyboard-o"
            color={"blue"}
            secureTextEntry={true}
            errorMessages={
              validatePassword(textPassword)
                ? undefined
                : "Mật khẩu phải nhiều hơn 4 kí tự"
            }
          />
          <Input
            title={"Nhập lại mật khẩu"}
            value={textPasswordRedo}
            onChangeInput={(text: string) => {
              console.log(text);
              setTextPasswordRedo(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="keyboard-o"
            color={"blue"}
            secureTextEntry={true}
            errorMessages={
              textPasswordRedo === textPassword
                ? undefined
                : "Mật khẩu không trùng khớp"
            }
          />
          <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}></View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ecf0f1",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  registerAsync({
                    phone: textPhone,
                    password: textPassword,
                    fullName: textFullName,
                    email: "viboy196@gmail.com",
                  })
                );
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "blue",
                  borderRadius: 30,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Đăng ký
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    flexDirection: "column",
  },
  loginForm: {
    flex: 3.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  title: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
  titleText: {
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "700",
  },
  inputForm: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ecf0f1",
  },
  footer: {
    width: "100%",
  },
});

export default Register;
