import { Link, router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthTextInput from "../../components/AuthTextInput";
import SubmitButton from "../../components/SubmitButton";

const handlePress = (): void => {
  //　ログイン処理
  router.replace("/memo/list");
};

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <AuthTextInput label="Email" email={true}></AuthTextInput>
        <AuthTextInput label="Password" secured={true}></AuthTextInput>
        <SubmitButton label="Submit" onPress={handlePress}></SubmitButton>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href="/auth/log_in" asChild>
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
