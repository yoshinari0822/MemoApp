import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>MemoApp</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#466FD3",
    height: 104,
    justifyContent: "flex-end",
  },

  headerInner: {
    alignItems: "center",
  },

  headerRight: {
    position: "absolute",
    right: 16,
    bottom: 16,
    color: "#ffffff",
    opacity: 0.7,
  },

  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Header;
