import dbService from "./dbService";

async function getNews() {
  const db = await dbService.getAnonDb();
  return db?.collection("news").find();
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getNews };
