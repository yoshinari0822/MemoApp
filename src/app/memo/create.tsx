import { router } from "expo-router";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import CircleButton from "../../components/CircleButton";
import Icon from "../../components/Icon";
import { auth, db } from "../../config";

const handlePress = (bodyText: string) => {
  if (auth.currentUser === null) {
    return;
  }
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`);
  addDoc(ref, {
    bodyText: bodyText,
    upDatedAt: Timestamp.fromDate(new Date()),
  })
    .then((docRef) => {
      console.log("成功", docRef.id);
      router.back();
    })
    .catch((error) => {
      console.log(error);
    });
};

//非同期の場合
// const handlePress = async () => {
//   await addDoc(collection(db, "memos"), {
//     bodyText: "test2",
//   }).catch((error) => {
//     console.log(error);
//   });
//   router.back();
// };

const Create = () => {
  const [bodyText, setBodyText] = useState("");
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
        ></TextInput>
      </View>
      <CircleButton
        onPress={() => {
          handlePress(bodyText);
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
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Create;
