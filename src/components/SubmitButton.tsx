import { StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
}

const SubmitButton = (prop: Props) => {
  const { label } = prop;
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#467FD3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});

export default SubmitButton;
