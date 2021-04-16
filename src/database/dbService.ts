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

async function getAnonDb() {
  await authService.anon_login();
  return anon_mongoDb;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAnonDb, getDb };
