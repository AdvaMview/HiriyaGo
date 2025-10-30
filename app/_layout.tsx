import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavThemeProvider,
} from "@react-navigation/native";
import { Provider as PaperProvider, MD3LightTheme } from "react-native-paper";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { I18nManager } from "react-native";

// ✅ ביטול יישור אוטומטי לימין כבר עם טעינת האפליקציה
if (I18nManager.isRTL) {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
}

// 🎨 הגדרת Theme מותאם לפי הצבעים שלך
export const AppTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4C6A3E", // ירוק כהה
    secondary: "#F7A64A", // כתום
    background: "#FFFFFF",
    surface: "#EAF0E4",
  },
};

// ✅ הוספת פונקציה להרצת ה־RTL fix לפני רינדור
function useForceLTR() {
  React.useEffect(() => {
    if (I18nManager.isRTL) {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
  }, []);
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  useForceLTR();

  return (
    <NavThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PaperProvider theme={AppTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(screens)/login" />
          <Stack.Screen name="(screens)/Registration" />
          <Stack.Screen name="(tabs)" />
        </Stack>
        <StatusBar style="auto" />
      </PaperProvider>
    </NavThemeProvider>
  );
}
