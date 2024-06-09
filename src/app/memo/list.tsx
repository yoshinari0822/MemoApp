import { router, useNavigation } from "expo-router";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { type Memo } from "../../../types/memo";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import LogOutButton from "../../components/LogOutButton";
import MemoListItem from "../../components/MemoListItem";
import { auth, db } from "../../config";

const handlePress = () => {
  router.push("/memo/create");
};

const list = () => {
  const navigation = useNavigation();
  const [memos, setMemos] = useState<Memo[]>([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />;
      },
    });
  }, []);

  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const remoteMemos: Memo[] = [];
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
    const q = query(ref, orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data();
        remoteMemos.push({
          id: doc.id,
          bodyText: bodyText,
          updatedAt: updatedAt,
        });
      });
      setMemos(remoteMemos);
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default list;
