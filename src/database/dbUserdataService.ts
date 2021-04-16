import authService from "./authService";
import Types from "mongoose";
import dbService from "./dbService";

async function getUserdata() {
  return authService.getUser()?.customData;
}

async function getNameOfUser(id: Types.ObjectId) {
  const db = await dbService.getAnonDb();
  const author = await db?.collection("userdata").findOne({ _id: id });
  return author ? author.name : "";
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getNameOfUser, getUserdata };
