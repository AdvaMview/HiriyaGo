import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

export default function PasswordForgetScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email) return; 
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        variant="headlineMedium"
        style={[styles.title, { color: colors.primary }]}
      >
        שחזור סיסמה
      </Text>

      {!sent ? (
        <>
          <Text style={styles.subtitle}>
            הזן את כתובת המייל שלך ונשלח אליך קוד לאיפוס הסיסמה.
          </Text>

          <TextInput
            mode="outlined"
            label="כתובת מייל"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            outlineColor="#EAF0E4"
            activeOutlineColor={colors.primary}
          />

          <Button
            mode="contained"
            onPress={handleSend}
            style={[styles.button, { backgroundColor: colors.secondary }]}
            loading={loading}
            disabled={loading}
          >
            שלח קוד איפוס
          </Button>

          <Button
            onPress={() => router.back()}
            textColor={colors.primary}
            style={styles.backButton}
          >
            חזרה למסך התחברות
          </Button>
        </>
      ) : (
        <>
          <Text style={styles.successText}>
            ✉️ נשלח אליך קוד איפוס לכתובת {email}
          </Text>
          <Button
            mode="contained"
            onPress={() => router.push("/login")}
            style={[styles.button, { backgroundColor: colors.secondary }]}
          >
            חזרה להתחברות
          </Button>
        </>
      )}
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
    marginBottom: 15,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 15,
    color: "#555",
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginTop: 10,
  },
  backButton: {
    marginTop: 10,
  },
  successText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 25,
    color: "#4C6A3E",
  },
});
