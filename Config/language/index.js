import * as Localization from "expo-localization";
import i18n from "i18n-js";
import he from "./Texts";
import en from "./TextEn";
import { I18nManager } from "react-native";

i18n.translations = { he, en };

const deviceLanguage = Localization.getLocales()[0]?.languageCode || "he";
const isRTL = Localization.getLocales()[0]?.textDirection === "rtl";

i18n.locale = deviceLanguage;
i18n.fallbacks = true;

if (isRTL) {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
}

export default i18n;
