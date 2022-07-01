import mongoose from "mongoose";
import { CompanyDocument } from "./Company";

export interface UserDocument extends mongoose.Document {
    name: string;
    surname: string;
    email: string;
    password: string;
    image?: string;
    recoveryCode?: string;
    company?: string | CompanyDocument;
    confirmationCode?: string;
    confirmedEmailAt?: Date;
    newTokenEmailNewPassword?: string;
    confirmedEmailNewPasswordAt?: Date;
    lastActivityAt?: Date;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    image: String,
    recoveryCode: String,
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
    },
    confirmationCode: String,
    confirmedEmailAt: Date,
    newTokenEmailNewPassword: String,
    confirmedEmailNewPasswordAt: Date,
    lastActivityAt: Date,
});

export default mongoose.model<UserDocument>("User", userSchema);
