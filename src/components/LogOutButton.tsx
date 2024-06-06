import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  onPress?: () => void;
}

const LogOutButton = (prop: Props) => {
  const { onPress } = prop;
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255,255,255,0.7)",
  },
});

export default LogOutButton;
