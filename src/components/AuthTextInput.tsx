import { StyleSheet, TextInput } from "react-native";

interface Props {
  label: string;
}

const AuthTextInput = (prop: Props) => {
  const { label } = prop;
  return <TextInput style={styles.input} value={label}></TextInput>;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    backgroundColor: "#FFFFFF",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
});

export default AuthTextInput;
