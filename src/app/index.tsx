import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { globalStyles, textStyles } from "../styles/globalStyles";

export default function App() {
  return (
    <View style={globalStyles.pageContainer}>
      <Text style={[textStyles.textLight, textStyles.h2_headline]}>
        Home page
      </Text>
      <Link href={"/newtask"} style={[textStyles.textLight]}>
        Criar tarfa
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
