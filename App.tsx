import { NavigationContainer } from "@react-navigation/native";

import { StartupStackNavigator } from "./navigation/Stacks/StartupStack";

import { enableScreens } from "react-native-screens";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LogBox } from "react-native";

import "react-native-gesture-handler";

enableScreens();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <StartupStackNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
