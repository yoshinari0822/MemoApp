import { StyleSheet, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Header from "../../components/Header";
import MemoListItem from "../../components/MemoListItem";

const list = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>＋</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default list;
