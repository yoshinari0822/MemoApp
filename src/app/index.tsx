import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>MemoApp</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      {/* メモアイテム一覧 */}
      <View>
        {/* メモ */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 追加ボタン */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

  memoListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },

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

export default Index;
