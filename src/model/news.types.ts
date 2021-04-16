import Types, { Document, Model } from "mongoose";

export interface News {
  header: string;
  author: Types.ObjectId;
  date: Date;
  tags: Array<string>;
  content: string;
}

export interface NewsDocument extends News, Document {}

export interface NewsModel extends Model<NewsDocument> {}
