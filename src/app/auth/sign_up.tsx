import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthTextInput from "../../components/AuthTextInput";
import SubmitButton from "../../components/SubmitButton";
import { auth } from "../../config";

const handlePress = (email: string, password: string): void => {
  // ログイン処理
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user.uid);
      router.replace("/memo/list");
    })
    .catch((error) => {
      const { code, message } = error;
      console.log(code, message);
      Alert.alert(message);
    });
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
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
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="/auth/log_in" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log In</Text>
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

export default SignUp;
