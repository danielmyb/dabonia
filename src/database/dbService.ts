import authService from "./authService";

const user = authService.getUser();
const mongoClient = user?.mongoClient("mongodb-atlas");
const mongoDb = mongoClient?.db(process.env.REACT_APP_DATABASE!);

function getDb() {
  return mongoDb;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getDb };
