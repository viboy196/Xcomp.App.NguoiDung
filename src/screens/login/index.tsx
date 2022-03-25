import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { useAppDispatch } from "../../redux/store/hooks";
import { loginAsync } from "../../redux/features/auth/authSlices";

import { View, Text } from "../../components/Themed";
import Input from "../../components/item/InputForm";
import { RootStackScreenProps } from "../../types";
import { validatePassword, validatePhoneNumber } from "../../utils/validate";
import { tintColorLight } from "../../constants/Colors";
import { AppName } from "../../utils/AppType";

const Login = ({ navigation }: RootStackScreenProps<"Login">) => {
  const dispatch = useAppDispatch();
  const [textPhone, setTextPhone] = useState("0981481527");
  const [textPassword, setTextPassword] = useState("1");
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
          {AppName}
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
              console.log(text);
              setTextPhone(text);
            }}
            style={{ marginLeft: 10, marginRight: 10 }}
            icon="phone"
            color={tintColorLight}
            errorMessages={
              validatePhoneNumber(textPhone)
                ? undefined
                : "Số điện thoại không hợp lệ"
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
            color={tintColorLight}
            secureTextEntry={true}
            errorMessages={
              validatePassword(textPassword) ? undefined : "mật khẩu quá ngắn"
            }
          />
          <View
            style={{
              flexDirection: "row",

              backgroundColor: "#ecf0f1",
            }}
          >
            <View style={{ flex: 1, backgroundColor: "#ecf0f1" }}></View>
            <TouchableOpacity>
              <Text
                style={{ padding: 10, marginRight: 15, color: tintColorLight }}
              >
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
                  backgroundColor: tintColorLight,
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Text
                style={{
                  color: tintColorLight,
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
    backgroundColor: tintColorLight,
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
