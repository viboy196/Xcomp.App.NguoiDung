import { View, Text } from "../components/Themed";

import { FlatList, TextInput, TouchableOpacity } from "react-native";
import { addTodo, removeTodo, Task } from "../redux/features/todos/todoSlices";
import { useAppDispatch, useAppSelector } from "../redux/store/hooks";
import { useState } from "react";
const TestTodos = () => {
  const tasks = useAppSelector((state) => state.todos.task_list) as Array<Task>;
  const dispatch = useAppDispatch();
  const [textInput, setTextInput] = useState("");
  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <TextInput
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
        placeholder="Nhap vao day"
      />
      <TouchableOpacity
        onPress={() => {
          if (textInput !== "") dispatch(addTodo({ task: textInput }));
          console.log("update tasklist", tasks);
        }}
      >
        <Text>an nut</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.task}</Text>
              <TouchableOpacity
                onPress={() => {
                  console.log("item id bi xoa :", item.id);
                  dispatch(removeTodo({ id: item.id }));
                }}
              >
                <Text>Xoa</Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TestTodos;
