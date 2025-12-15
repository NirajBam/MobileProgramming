import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { db } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function HelpTicketScreen() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!subject || !message) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      await addDoc(collection(db, "helpTickets"), {
        subject,
        message,
        createdAt: serverTimestamp(),
      });
      Alert.alert("Success", "Your ticket has been submitted!");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Something went wrong while submitting your ticket");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HamroPathao Help Center</Text>

      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ticket subject"
        value={subject}
        onChangeText={setSubject}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        placeholder="Describe your issue..."
        multiline
        value={message}
        onChangeText={setMessage}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Ticket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#D32F2F",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#f1f1f1",
    padding: 12,
    borderRadius: 10,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#D32F2F",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
