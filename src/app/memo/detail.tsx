import { router, useLocalSearchParams } from "expo-router";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { type Memo } from "../../../types/memo";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { auth, db } from "../../config";

const handlePress = () => {
  router.push("/memo/edit");
};

const Detail = () => {
  const params = useLocalSearchParams();
  const { id } = params;
  const [memo, setMemo] = useState<Memo | null>(null);

  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id));
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { id, bodyText, updatedAt } = memoDoc.data() as Memo;
      setMemo({ id: id, bodyText: bodyText, updatedAt: updatedAt });
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text numberOfLines={1} style={styles.memoTitle}>
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoDate}>
          {memo?.updatedAt.toDate().toLocaleDateString("ja-JP")}
        </Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton style={{ top: 60, bottom: "auto" }} onPress={handlePress}>
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
    paddingHorizontal: 27,
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Detail;
