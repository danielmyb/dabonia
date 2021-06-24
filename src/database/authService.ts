import * as Realm from "realm-web";
import config from "../configs/config.json";

const application = config.application;
const app: Realm.App = new Realm.App({ id: application });
const anon_app: Realm.App = new Realm.App({ id: application });

async function login(email: string, password: string) {
  const credentials = Realm.Credentials.emailPassword(email, password);
  await app.logIn(credentials);
}

async function anon_login() {
  const credentials = Realm.Credentials.anonymous();
  await anon_app.logIn(credentials);
}

function anon_getUser() {
  const user = getUser();
  return user ? user : anon_app.currentUser;
}

function anon_isLoggedIn() {
  return anon_app.currentUser?.isLoggedIn;
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
export default { anon_getUser, anon_login, anon_isLoggedIn, getUser, isLoggedIn, logout, login };
