import { router, useLocalSearchParams } from "expo-router";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import KeyboardAvoidingView from "../../components/KeyboardAvoidingView";
import { auth, db } from "../../config";
// import { type Memo } from "../../../types/memo";

const handlePress = (id: string, bodyText: string) => {
  if (auth.currentUser === null) {
    return;
  }
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
  setDoc(ref, {
    bodyText: bodyText,
    updatedAt: Timestamp.fromDate(new Date()),
  })
    .then(() => {
      router.back();
    })
    .catch((error) => {
      console.log(error);
      Alert.alert("変更に失敗しました");
    });
};

const Edit = () => {
  const id = String(useLocalSearchParams().id);
  const [bodyText, setBodyText] = useState("");
  useEffect(() => {
    if (auth.currentUser === null) {
      return;
    }
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id);
    getDoc(ref)
      .then((docRef) => {
        const remoteBodyText = docRef?.data()?.bodyText;
        setBodyText(remoteBodyText);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {
            setBodyText(text);
          }}
          value={bodyText}
          multiline
          style={styles.input}
          autoFocus
        ></TextInput>
      </View>
      <CircleButton
        onPress={() => {
          handlePress(id, bodyText);
        }}
      >
        <Icon name="check" size={40} color="ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Edit;
