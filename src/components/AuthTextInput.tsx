import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  label: string;
  email?: boolean;
  secured?: boolean;
}

const AuthTextInput = (prop: Props) => {
  const { label, email, secured } = prop;
  const [text, setText] = useState("");
  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={(text) => {
        setText(text);
      }}
      autoCapitalize="none"
      keyboardType={email === true ? "email-address" : "default"}
      secureTextEntry={secured === true ? true : false}
      placeholder={label}
      textContentType={
        email === true ? "emailAddress" : secured ? "password" : "none"
      }
    ></TextInput>
  );
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
