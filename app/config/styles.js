import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.black,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 18,
  },
};
