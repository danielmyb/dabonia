import * as Realm from "realm-web";
import config from "../configs/config.json";

const application = config.application;
const app: Realm.App = new Realm.App({ id: application });

async function login(email: string, password: string) {
  const credentials = Realm.Credentials.emailPassword(email, password);
  await app.logIn(credentials);
}

function getUser() {
  return app.currentUser;
}

function isLoggedIn() {
  return app.currentUser?.isLoggedIn;
}

async function logout() {
  await app.currentUser?.logOut();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUser, isLoggedIn, logout, login };
