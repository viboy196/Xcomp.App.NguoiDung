import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { setTienIch } from "../redux/features/tienich/tienichSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { GetTienichByNguoidung } from "../utils/api/Main";
import ItemTienIch from "./item/ItemTienIch";
import { Text, View } from "./Themed";
type Props = {};
const TienIch = () => {
  const tag = "TienIch";
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const [dsTienIch, setDsTienIch] = useState<Array<any>>([]);

  useEffect(() => {
    if (auth.token)
      GetTienichByNguoidung({ token: auth.token })
        .then((data) => {
          setDsTienIch(data.result);
        })
        .catch((error) => {
          console.log(`${tag} | useEffect | error :`, error);
        });
  }, []);
  useEffect(() => {
    console.log("dsTienIch", dsTienIch.length);

    dispatch(
      setTienIch({
        dsTienIch,
      })
    );
  }, [dsTienIch]);
  return (
    <View style={{}}>
      <FlatList
        data={dsTienIch}
        renderItem={({ item }) => <ItemTienIch ItemTienIch={item} />}
        keyExtractor={(item) => item.idTienIch}
      />
    </View>
  );
};

export default TienIch;
