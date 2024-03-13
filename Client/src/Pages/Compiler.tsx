import Editor from "@/components/Editor";
import Headerbtn from "@/components/Headerbtn";
import OutputCode from "@/components/OutputCode";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Compiler() {
  const { urlId } = useParams();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      const response = await axios.post("http://localhost:4000/compiler/load", {
        urlId: urlId,
      });
      console.log(response.data);
      dispatch(updateFullCode(response.data.fullCode));
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="">
        <ResizablePanel
          className="h-[calc(100dvh-60px)] min-w-[350px]"
          defaultSize={50}
        >
          <Headerbtn />
          <Editor />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel
          className="h-[calc(100dvh-60px)] min-w-[350px]"
          defaultSize={50}
        >
          <OutputCode />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
