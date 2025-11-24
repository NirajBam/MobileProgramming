import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";

export default function HomeScreen() {
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>Counter</Text>

        {/* COUNTER DISPLAY */}
        <Text style={styles.countText}>{count}</Text>

        {/* BUTTON ROW */}
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setCount(count - 1)}
          >
            <Text style={styles.btnText}>Decrease</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.btnText}>Increase</Text>
          </TouchableOpacity>
        </View>

        {/* MODAL BUTTON */}
        <TouchableOpacity
          style={styles.modalBtn}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.modalBtnText}>Open Modal</Text>
        </TouchableOpacity>
      </View>

      {/* MODAL BOX */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>This is a Modal!</Text>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeText}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },

  card: {
    width: "85%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  countText: {
    fontSize: 40,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: {
    backgroundColor: "#1e90ff",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },

  modalBtn: {
    marginTop: 20,
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  modalBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
  },

  modalText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },

  closeBtn: {
    backgroundColor: "#ff4444",
    padding: 10,
    borderRadius: 8,
  },

  closeText: {
    color: "white",
    fontWeight: "600",
  },
});
