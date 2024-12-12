import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
      lowercase: true,
    },
    secondName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dxvpvtcbg/image/upload/v1713493679/sqlpxs561zd9oretxkki.jpg",
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
