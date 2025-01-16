import { Text, TextInput, TextInputProps, View } from "react-native";

import {
  CommonInputStyles as Input,
  textStyles as text,
} from "../styles/globalStyles";

interface CustomTextInputProps extends TextInputProps {
  label: string;
  customStyle?: {};
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  textContentType,
  placeholder,
  label,
  multiline = false,
  customStyle,
}) => {
  return (
    <View style={[Input.container]}>
      <Text style={[text.h6_label, text.textLight]}>{label}</Text>
      <TextInput
        textContentType={textContentType}
        placeholder={placeholder}
        multiline={multiline}
        style={[text.p_paragraph, Input.colors, Input.field, customStyle]}
      />
    </View>
  );
};
