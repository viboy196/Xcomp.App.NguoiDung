import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useAppDispatch } from "../redux/store/hooks";
import { loginAsync } from "../redux/features/auth/authSlices";

import { View, Text } from "../components/Themed";
import Input from "./components/input";

const Login = () => {
  const dispatch = useAppDispatch();
  const [textPhone, setTextPhone] = useState("0988888888");
  const [textPassword, setTextPassword] = useState("123456");
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
          <Text style={styles.titleText}>Đăng Nhập</Text>
        </View>
        <View style={styles.inputForm}>
          <Input
            title={"số điện thoại"}
            value={textPhone}
            keyboardType={"numeric"}
            onChangeInput={(text: string) => {
              
              setTextPhone(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="phone"
            color={"blue"}
            errorMessages={"số điện thoại không hợp"}
          />

          <Input
            title={"Mật khẩu"}
            value={textPassword}
            onChangeInput={(text: string) => {
              
              setTextPassword(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="keyboard-o"
            color={"blue"}
            secureTextEntry={true}
          />
          <View
            style={{
              flexDirection: "row",

              backgroundColor: "#ecf0f1",
            }}
          >
            <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}></View>
            <TouchableOpacity>
              <Text style={{ padding: 10, marginRight: 15, color: "blue" }}>
                Quên Mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
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
                  loginAsync({ phone: textPhone, password: textPassword })
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
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "#fff",
                  }}
                >
                  Đăng nhập
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 10,

              backgroundColor: "#ecf0f1",
            }}
          >
            <Text>Bạn chưa có tài khoản ? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "blue",
                }}
              >
                Đăng ký ngay
              </Text>
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
    flex: 3,
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

export default Login;
