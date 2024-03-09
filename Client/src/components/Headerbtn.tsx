import { Button } from "./ui/button";
import { ExternalLink, SaveAll } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentLanguage } from "@/redux/slices/compilerSlice";
import { Rootstate } from "@/redux/store";
import { InitialStateType } from "../redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";

export default function Headerbtn() {
  const fullCode = useSelector((state: Rootstate) => {
    state.compiler.fullCode;
  });
  const handleSavebtn = async () => {
    try {
      const response = await axios.post("localhost:4000/compiler/save", {
        fullCode: fullCode,
      });
      console.log(response.data);
    } catch (error) {
      handleError(error);
    }
  };
  const currentLanguage = useSelector(
    (state: Rootstate) => state.compiler.currentLanguage
  );
  const dispatch = useDispatch();
  return (
    <div className="h-[50px] flex items-center justify-between p-2 bg-black  ">
      <div className="flex gap-2">
        <Button
          onClick={handleSavebtn}
          variant="save"
          className="flex items-center justify-center gap-1"
        >
          {" "}
          <SaveAll size={16} />
          Save
        </Button>
        <Button
          variant="share"
          className="flex items-center justify-center gap-1"
        >
          {" "}
          <ExternalLink size={16} />
          Share
        </Button>
      </div>
      <div className="flex gap-1 items-center">
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              setCurrentLanguage(value as InitialStateType["currentLanguage"])
            )
          }
        >
          <p>Language:</p>
          <SelectTrigger className="w-[140px] bg-gray-800 focus:ring-0 outline-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">Javascript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
