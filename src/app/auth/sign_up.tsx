import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthTextInput from "../../components/AuthTextInput";
import Header from "../../components/Header";
import SubmitButton from "../../components/SubmitButton";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <AuthTextInput label="Email Address"></AuthTextInput>
        <AuthTextInput label="password"></AuthTextInput>
        <SubmitButton label="Submit"></SubmitButton>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Log In</Text>
          </TouchableOpacity>
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
