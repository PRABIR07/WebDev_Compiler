import { Button } from "./ui/button";
import { ExternalLink, SaveAll } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Headerbtn() {
  return (
    <div className="h-[50px] flex items-center justify-between p-2 bg-black  ">
      <div className="flex gap-2">
        <Button
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
        <Select defaultValue="html">
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
