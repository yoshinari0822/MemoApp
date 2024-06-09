import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthTextInput from "../../components/AuthTextInput";
import SubmitButton from "../../components/SubmitButton";
import { auth } from "../../config";

const handlePress = (email: string, password: string): void => {
  //ログイン処理
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      router.replace("/memo/list");
    })
    .catch((error) => {
      const { code, message } = error;
      Alert.alert(message);
    });
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <AuthTextInput label="Email" email={true} onChangeText={setEmail} />
        <AuthTextInput
          label="Password"
          secured={true}
          onChangeText={setPassword}
        />
        <SubmitButton
          label="Submit"
          onPress={() => handlePress(email, password)}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/sign_up" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3",
  },
});

export default LogIn;
