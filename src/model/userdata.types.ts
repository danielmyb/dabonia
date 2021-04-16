import { Document, Model } from "mongoose";

export interface Userdata {
  user_id: string;
  role: string;
  name: string;
}

export interface UserdataDocument extends Userdata, Document {}

export interface UserdataModel extends Model<UserdataDocument> {}
