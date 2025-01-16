import { Feather } from "@expo/vector-icons/";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  text: string;
  iconName?: keyof typeof Feather.glyphMap;
  iconSize?: number;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  iconName,
  iconSize = 24,
}) => {
  return (
    <Pressable>
      <Feather name={iconName} size={iconSize} />
      <Text>{text}</Text>
    </Pressable>
  );
};
