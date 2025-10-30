import React from "react";
import { View, StyleSheet } from "react-native";
import ShapeUp from "@/assets/images/graphic/shapeUp/svg"
import ShapeBottom from "@/assets/images/graphic/shapeBottom.svg";

/**
 * קומפוננטת רקע קבועה:
 * - shapeUp.svg בפינה השמאלית העליונה
 * - shapeBottom.svg בפינה השמאלית התחתונה
 */
export default function BackgroundShapes() {
  return (
    <View style={styles.container}>
      <ShapeUp style={styles.shapeTop} />
      <ShapeBottom style={styles.shapeBottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // כדי שהרקע יהיה מאחורי התוכן
  },
  shapeTop: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 160,
    height: 160,
  },
  shapeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 180,
    height: 180,
  },
});
