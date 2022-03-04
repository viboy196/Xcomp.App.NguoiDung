import { FontAwesome } from "@expo/vector-icons";
import * as React from "react";
import { useState } from "react";
import {
  KeyboardTypeOptions,
  OpaqueColorValue,
  StyleProp,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { View, Text } from "../../components/Themed";
import useColorScheme from "../../hooks/useColorScheme";
import Colors from "../../constants/Colors";

const input = (props: {
  title?: string;
  value?: string;
  onChangeInput?: (text: string) => void;
  style?: StyleProp<ViewStyle> | undefined;
  icon?: React.ComponentProps<typeof FontAwesome>["name"];
  color?: string | OpaqueColorValue;
  errorMessages?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
}) => {
  const {
    title,
    value,
    onChangeInput,
    style,
    icon,
    color,
    errorMessages,
    keyboardType,
    secureTextEntry,
  } = props;
  const placeholderTitle = `Nhập ${title}`;
  const [focus, setFocus] = useState(false);
  const [showPass, setShowPass] = useState(
    secureTextEntry !== undefined ? secureTextEntry : false
  );
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        backgroundColor: "#ecf0f1",
      }}
    >
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 5,
          borderRadius: 10,
          borderWidth: focus ? 2 : 0,
          borderColor: color === undefined ? Colors[colorScheme].text : color,
          padding: 5,
        }}
      >
        <Text
          style={{
            padding: 5,
            fontSize: 18,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            height: 40,
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 10,
              width: 50,
            }}
          >
            <FontAwesome
              name={icon}
              size={25}
              color={color === undefined ? Colors[colorScheme].text : color}
              style={{ marginRight: 15 }}
            />
          </View>

          <View
            style={{
              width: 2,
              backgroundColor: "#eee",
              height: "70%",
            }}
          ></View>
          <TextInput
            style={{
              flex: 1,
              paddingLeft: 10,
            }}
            placeholder={placeholderTitle}
            value={value}
            keyboardType={keyboardType}
            secureTextEntry={showPass}
            onChangeText={(text) => {
              if (onChangeInput != undefined) onChangeInput(text);
            }}
            onFocus={() => {
              setFocus(true);
            }}
            onBlur={() => {
              setFocus(false);
            }}
          />
          {secureTextEntry && (
            <TouchableOpacity
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              <FontAwesome
                name={showPass ? "eye" : "eye-slash"}
                size={25}
                color={
                  showPass
                    ? color === undefined
                      ? Colors[colorScheme].text
                      : color
                    : "#777"
                }
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          marginRight: 10,
          paddingLeft: 70,
          marginBottom: 10,
          backgroundColor: "#ecf0f1",
        }}
      >
        {errorMessages !== undefined && errorMessages !== "" && (
          <Text>{errorMessages}</Text>
        )}
      </View>
    </View>
  );
};

export default input;
