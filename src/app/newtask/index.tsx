import { Text, View, StyleSheet } from "react-native";
import { globalStyles, textStyles } from "../../styles/globalStyles";
import { CustomTextInput } from "../../components/TextInput";
import { textContentType } from "../../enums/TextInputType";
import { SelectInput } from "../../components/SelectInput";
import { Checkbox } from "../../components/CheckBox";

const NewTaskScreen: React.FC = () => {
  return (
    <View style={globalStyles.pageContainer}>
      <Text style={[textStyles.h3_subHeading, textStyles.textLight]}>
        New Task
      </Text>

      <CustomTextInput
        label="Description"
        placeholder="Description here"
        textContentType={textContentType.name}
      />

      <SelectInput
        dataList={["LOW", "COMMON", "HIGH"]}
        placeholder="Select the priority"
        label="Priority"
      />

      <Checkbox label="It was a mistake" />

      <CustomTextInput
        label="Observation"
        placeholder="If it was a mistake, why did it occur or how did you solve it"
        multiline={true}
        customStyle={style.custom}
      />
    </View>
  );
};

const style = StyleSheet.create({
  custom: {
    height: 100,
    textAlignVertical: "top",
  },
});

export default NewTaskScreen;
