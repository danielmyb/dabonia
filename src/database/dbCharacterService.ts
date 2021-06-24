import authService from "./authService";

async function getCharacters() {
  return authService.anon_getUser()?.callFunction("getCharacterData", [process.env.NODE_ENV]);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getCharacters };
