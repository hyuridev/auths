import mongoose from "mongoose";
import { UserDocument } from "./User";

export interface TokenDocument extends mongoose.Document {
    refreshToken: string;
    issuedAt: Date;
    rotatedAt?: Date;
    userAgent?: string;
    user: string | UserDocument;
}

const tokenSchema: mongoose.Schema = new mongoose.Schema({
    refreshToken: String,
    issuedAt: Date,
    rotatedAt: Date,
    userAgent: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model<TokenDocument>("Token", tokenSchema);
