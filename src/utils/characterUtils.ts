import i18next from "i18next";

function resolveTranslation(object: any) {
  const language = i18next.language || window.localStorage.i18nextLng;
  if (object[language]) {
    return object[language];
  } else if (object["de_DE"]) {
    return object["de_DE"];
  } else {
    return "Error: CNRT";
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { resolveTranslation };
