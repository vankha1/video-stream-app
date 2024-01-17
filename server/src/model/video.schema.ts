import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "../model/user.schema";

@Schema()

export class Video {
    @Prop()
    title: string

    @Prop()
    video: string

    @Prop()
    coverImage: string

    @Prop({ default: Date.now() })
    updatedDate: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    createdBy: User
}

export const VideoSchema = SchemaFactory.createForClass(Video)