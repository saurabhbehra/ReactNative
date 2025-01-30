import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {useContext } from 'react'
import { ThemeContext } from "@/context/ThemeContext";

export default function EditScreen() {
  const { id } = useLocalSearchParams();
  const { colorScheme, setColorScheme, theme } = useContext(ThemeContext)
  return (
    <SafeAreaView>
      <View>
        <Text>{id}</Text>
      </View>
      <StatusBar style={colorScheme==='dark'?'dark':'dark'}/>

    </SafeAreaView>
  );
}
