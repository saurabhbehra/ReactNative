import { Redirect } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";

const Index = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/(auth)/welcome" />;
};

export default Index;
