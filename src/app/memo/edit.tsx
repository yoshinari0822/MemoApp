import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

const Edit = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <Header></Header>
      <View style={styles.inputContainer}>
        <TextInput
          value={"買い物\nリスト"}
          multiline
          style={styles.input}
        ></TextInput>
      </View>
      <CircleButton>
        <Icon name="check" size={40} color="ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
