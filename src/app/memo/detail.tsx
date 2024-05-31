import { ScrollView, StyleSheet, Text, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";
import Icon from "../../components/Icon";

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023/5/5 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成私の名前は金山義成
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: "auto" }}>
        <Icon name="pencil" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#ffffff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "white",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Detail;
