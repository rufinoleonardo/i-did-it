import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../styles/globalColors";
import { View } from "react-native";
import { CommonInputStyles, textStyles } from "../styles/globalStyles";

interface CheckBoxProps {
  label: string;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ label }) => {
  return (
    <View style={CommonInputStyles.field}>
      <BouncyCheckbox
        size={25}
        fillColor={Colors.BLUE_DARK}
        unFillColor="#FFFFFF"
        text={label}
        iconStyle={{ borderColor: Colors.GRAY_LIGHT }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={[textStyles.p_paragraph, textStyles.textLight]}
        onPress={(isChecked: boolean) => {
          console.log(isChecked);
        }}
      />
    </View>
  );
};
