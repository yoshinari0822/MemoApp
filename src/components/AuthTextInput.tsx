import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props {
  label: string;
  email?: boolean;
  secured?: boolean;
  onChangeText: (text: string) => void;
}

const AuthTextInput = (props: Props) => {
  const { label, email, secured, onChangeText } = props;
  const [text, setText] = useState("");

  const handleChangeText = (text: string) => {
    setText(text);
    onChangeText(text);
  };

  return (
    <TextInput
      style={styles.input}
      value={text}
      onChangeText={handleChangeText}
      autoCapitalize="none"
      keyboardType={email ? "email-address" : "default"}
      secureTextEntry={secured ? true : false}
      placeholder={label}
      textContentType={email ? "emailAddress" : secured ? "password" : "none"}
    />
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
