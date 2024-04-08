import Editor from "@/components/Editor";
import Headerbtn from "@/components/Headerbtn";
import Loader from "@/components/Loader/Loader";
import OutputCode from "@/components/OutputCode";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useLoadCodeMutation } from "@/redux/slices/api";
import { updateFullCode } from "@/redux/slices/compilerSlice";
import { handleError } from "@/utils/handleError";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function Compiler() {
  const { urlId } = useParams();
  const [loadExistingCode, { isLoading }] = useLoadCodeMutation();
  const dispatch = useDispatch();

  const loadCode = async () => {
    try {
      if (urlId) {
        const response = await loadExistingCode({ urlId }).unwrap();
        dispatch(updateFullCode(response.fullCode));
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    if (urlId) {
      loadCode();
    }
  }, [urlId]);

  if (isLoading)
    return (
      <div className="w-full h-[calc(100dvh-60px)] flex justify-center items-center">
        <Loader />
      </div>
    );
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
