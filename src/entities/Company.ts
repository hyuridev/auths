import mongoose from "mongoose";
import { RoleDocument } from "./Role";
import { UserDocument } from "./User";

export interface CompanyDocument extends mongoose.Document {
    name: string;
    identifier: string;
    logo?: string;
    roles: Array<string | RoleDocument>;
    members: Array<{
        owner?: boolean;
        email: string;
        user?: string | UserDocument;
        role: string | RoleDocument;
    }>;
    createdAt: Date;
}

const companySchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    identifier: String,
    logo: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },
    ],
    members: [
        {
            owner: Boolean,
            email: String,
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            role: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        },
    ],
    createdAt: Date,
});

export default mongoose.model<CompanyDocument>("Company", companySchema);
