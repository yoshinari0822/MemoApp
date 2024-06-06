import { StyleSheet, Text, View } from "react-native";
import AuthTextInput from "../../components/AuthTextInput";
import Header from "../../components/Header";
import SubmitButton from "../../components/SubmitButton";

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <AuthTextInput label="Email Address"></AuthTextInput>
        <AuthTextInput label="password"></AuthTextInput>
        <SubmitButton label="Submit"></SubmitButton>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here</Text>
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
