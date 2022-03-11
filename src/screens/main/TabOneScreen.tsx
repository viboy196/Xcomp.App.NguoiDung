import { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useAppSelector } from "../../redux/store/hooks";
import { RootTabScreenProps } from "../../types";
import { DetailInfo } from "../../utils/api";
//import axios, { urlDetail } from "../../utils/api/apiLink";
import axios from "axios";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [info, setInfo] = useState({});
  const auth = useAppSelector((state) => state.auth);
  const fetchMyAPI = useCallback(async () => {
    if (auth.token !== undefined) {
      let response = await DetailInfo(auth.token);
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
  // useEffect(() => {
  //   aw axios
  //     .get(urlDetail, { headers: { Authorization: `Bearer ${auth.token}` } })
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => getdetail()}>
        <Text style={styles.title}>Main</Text>
      </TouchableOpacity>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
