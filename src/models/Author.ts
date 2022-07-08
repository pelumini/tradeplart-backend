import mongoose, { Document, Schema } from 'mongoose';

export interface IAuthor {
  name: string;
}

export interface IAuthorModel extends Document, IAuthor {}

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<IAuthorModel>('Author', AuthorSchema);
