import authService from "./authService";

async function getUserdata() {
  return authService.getUser()?.customData;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUserdata };
