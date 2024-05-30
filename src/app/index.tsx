import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>MemoApp</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      {/* メモアイテム一覧 */}
      <View>
        {/* メモ */}
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023/11/11/ 11:11</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      {/* 追加ボタン */}
      <View>
        <Text>＋</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
