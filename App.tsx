import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider } from "react-redux";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import TestTodos from "./src/TestScreens/TestTodos";
import TestLogin from "./src/TestScreens/testLogin";
import LoginScreen from "./src/TestScreens/LoginScreen";
import RegisterScreen from "./src/TestScreens/RegisterScreen";

import store from "./src/redux/store/store";
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
