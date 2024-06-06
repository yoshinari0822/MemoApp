import { router, useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import MemoListItem from "../../components/MemoListItem";

const handlePress = () => {
  router.push("/memo/create");
};

const list = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Text>Text</Text>;
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
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
