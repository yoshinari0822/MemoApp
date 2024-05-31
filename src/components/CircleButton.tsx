import { StyleSheet, Text, View, type ViewStyle } from "react-native";

interface Props {
  children: JSX.Element;
  style?: ViewStyle;
}

const CircleButton = (props: Props) => {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 40,
    right: 40,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#367FD3",
    justifyContent: "center",
    alignItems: "center",
    // iOSのみ
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    // Androidのみ
    elevation: 8,
  },

  circleButtonLabel: {
    color: "#ffffff",
    fontSize: 40,
  },
});

export default CircleButton;
