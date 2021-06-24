import authService from "./authService";

const user = authService.getUser();
const mongoClient = user?.mongoClient("mongodb-atlas");
const mongoDb = mongoClient?.db(process.env.REACT_APP_DATABASE!);

function getDb() {
  return mongoDb;
}

const anon_user = authService.anon_getUser();
const anon_mongoClient = anon_user?.mongoClient("mongodb-atlas");
const anon_mongoDb = anon_mongoClient?.db(process.env.REACT_APP_DATABASE!);

/**
 * Receive the anonymous DB access. If a user is logged in the non-anonymous access is used.
 */
async function getAnonDb() {
  if (getDb()) return getDb();
  await authService.anon_login();
  return anon_mongoDb;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAnonDb, getDb };
