import { MD3LightTheme } from "react-native-paper";

export const AppTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#4C6A3E",  
    secondary: "#F7A64A", 
    background: "#FFFFFF",
    surface: "#EAF0E4",   
    text: "#2E2E2E",     
    placeholder: "#A0A0A0", 
  },

  fonts: {
    titleLarge: { fontFamily: "Rubik-Bold", fontSize: 24 },
    titleMedium: { fontFamily: "Rubik-SemiBold", fontSize: 20 },
    bodyLarge: { fontFamily: "Heebo-Regular", fontSize: 16 },
    bodySmall: { fontFamily: "Heebo-Regular", fontSize: 14 },
  },

  roundness: 10,
  elevation: {
    level1: 2,
    level2: 4,
  },
};
