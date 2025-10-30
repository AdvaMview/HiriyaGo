import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput, Button, Text, useTheme } from "react-native-paper";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const router = useRouter();
  const { colors } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    console.log("Registering:", { username, password, phone, vehicleNumber, idNumber });

    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1200); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text variant="headlineMedium" style={[styles.title, { color: colors.primary }]}>
        יצירת חשבון חדש
      </Text>

      <View style={styles.form}>
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
          label="סיסמה"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          outlineColor="#EAF0E4"
          activeOutlineColor={colors.primary}
        />

        <TextInput
          mode="outlined"
          label="מספר טלפון"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
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
          label="מספר תעודת זהות"
          keyboardType="numeric"
          value={idNumber}
          onChangeText={setIdNumber}
          style={styles.input}
          outlineColor="#EAF0E4"
          activeOutlineColor={colors.primary}
        />

        <Button
          mode="contained"
          onPress={handleRegister}
          loading={loading}
          disabled={loading}
          style={[styles.button, { backgroundColor: colors.secondary }]}
        >
          יצירת חשבון
        </Button>

        <Button onPress={() => router.push("/(screens)/login")} textColor={colors.primary}>
          כבר יש לך חשבון? התחברות כאן
        </Button>
      </View>
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
  form: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginBottom: 10,
  },
  button: {
    width: "100%",
    marginTop: 15,
    borderRadius: 20,
  },
});
