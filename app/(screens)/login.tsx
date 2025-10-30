import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const [username, setUsername] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    console.log("Logging in:", { username, vehicleNumber, password });

    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1200); // סימולציה של התחברות
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text variant="headlineMedium" style={[styles.title, { color: colors.primary }]}>
        התחברות למערכת
      </Text>

      <TextInput
        mode="outlined"
        label="שם משתמש"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        outlineColor="#EAF0E4"
        activeOutlineColor={colors.primary}
      />

      <TextInput
        mode="outlined"
        label="מספר רכב"
        value={vehicleNumber}
        onChangeText={setVehicleNumber}
        style={styles.input}
        outlineColor="#EAF0E4"
        activeOutlineColor={colors.primary}
      />

      <TextInput
        mode="outlined"
        label="סיסמה"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        outlineColor="#EAF0E4"
        activeOutlineColor={colors.primary}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        loading={loading}
        disabled={loading}
      >
        התחברות
      </Button>

      <Button
        onPress={() => router.push("/(screens)/Registration")}
        textColor={colors.secondary}
      >
        אין לך חשבון? יצירת חשבון חדש כאן
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "#F7A64A",
  },
});
