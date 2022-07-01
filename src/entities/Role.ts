import mongoose from "mongoose";

export interface RoleDocument extends mongoose.Document {
    name: string;
    default?: boolean;
    permissions: Array<{
        name: string;
        view: boolean;
        insert: boolean;
        edit: boolean;
        delete: boolean;
    }>;
    createdAt: Date;
}

const roleSchema: mongoose.Schema = new mongoose.Schema({
    name: String,
    default: Boolean,
    permissions: [
        {
            name: String,
            view: Boolean,
            insert: Boolean,
            edit: Boolean,
            delete: Boolean,
        },
    ],
    createdAt: Date,
});

export default mongoose.model<RoleDocument>("Role", roleSchema);
