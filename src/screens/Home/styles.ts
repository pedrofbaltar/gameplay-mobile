import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 40,
  },
  content: {
    marginTop: 40,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
  },
});
