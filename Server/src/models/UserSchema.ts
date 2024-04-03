import mongoose from "mongoose";

interface IUserSchema {
  username: string;
  email: string;
  password: string;
  picture: string;
  finalCodes: Array<{ _id: string }>;
}

const UserSchema = new mongoose.Schema<IUserSchema>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    picture: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fempty-profile-picture&psig=AOvVaw3Wsl8Vq_GgVFG9px_BW1J5&ust=1710836715465000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiBjcmx_YQDFQAAAAAdAAAAABAE",
    },
    finalCodes: [{ type: mongoose.Schema.Types.ObjectId }],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
