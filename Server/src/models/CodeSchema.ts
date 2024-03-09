import mongoose from "mongoose";

interface ICodeSchema {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
}

const CodeSchema = new mongoose.Schema<ICodeSchema>({
  fullCode: {
    html: String, //mongoose schema thatswhy String capital
    css: String,
    javascript: String,
  },
});

export const Code = mongoose.model("Code", CodeSchema);
