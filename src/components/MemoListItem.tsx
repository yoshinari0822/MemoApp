import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { type Memo } from "../../types/memo";
import Icon from "./Icon";

interface Props {
  memo: Memo;
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props;
  const { bodyText, updatedAt } = memo;
  if (bodyText === null || updatedAt === null) {
    return null;
  }
  const dateString = updatedAt.toDate().toLocaleDateString("ja-JP");
  return (
    <Link href="/memo/detail" asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text numberOfLines={1} style={styles.memoListItemTitle}>
            {bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
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
});

export default MemoListItem;
