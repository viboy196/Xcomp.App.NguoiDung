import { TouchableOpacity } from "react-native";
import { Text, View } from "../Themed";

const ItemFormCongViec = (props: {
  titleCv?: string;
  titleChucvu?: string;
  titleToChuc?: string;
}) => {
  const { titleCv, titleChucvu, titleToChuc } = props;
  return (
    <View
      style={{
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dfdfdf",
      }}
      lightColor="#f7f7f7"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderTopStartRadius: 10,

          borderTopEndRadius: 10,
        }}
        lightColor="#f7f7f7"
      >
        <Text
          style={{
            marginLeft: 5,
          }}
        >
          {titleCv}
        </Text>
        <View style={{ flex: 1 }} lightColor="#f7f7f7"></View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            lightColor="#f7f7f7"
            style={{
              height: 30,
              width: 100,
              backgroundColor: "#0d6efd",
              justifyContent: "center",
              alignItems: "center",
              margin: 5,
              borderRadius: 5,
            }}
          >
            <Text lightColor="white">Làm việc</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomEndRadius: 10,

          borderBottomStartRadius: 10,
        }}
      >
        <View
          style={{
            margin: 10,
          }}
        >
          <Text>Nhân viên: {titleChucvu}</Text>
          <Text>Tổ chức: {titleToChuc}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemFormCongViec;
