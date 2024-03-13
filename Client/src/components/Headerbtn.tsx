import { Button } from "./ui/button";
import { ExternalLink, Loader2, SaveAll } from "lucide-react";
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
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Headerbtn() {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const fullCode = useSelector((state: Rootstate) => {
    return state.compiler.fullCode;
  });
  const handleSavebtn = async () => {
    setSaveLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/compiler/save", {
        fullCode: fullCode,
      });

      navigate(`/compiler/${response.data.url}`, { replace: true });
    } catch (error) {
      handleError(error);
    } finally {
      setSaveLoading(false);
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
          disabled={saveLoading}
        >
          {" "}
          {saveLoading ? (
            <>
              <Loader2 className="animate-spin" /> Saving...
            </>
          ) : (
            <>
              <SaveAll size={16} /> Save
            </>
          )}
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

//
